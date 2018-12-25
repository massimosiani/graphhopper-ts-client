const request = require('superagent');
import GHUtil from './GHUtil';
import { OptimizeRequest, Service, Vehicle, VehicleType } from './OptimizeRequest';
import { OptimizeResponse } from './OptimizeResponse';
import Point from './Point';
import { SolutionResponse } from './SolutionResponse';

export class GraphHopperOptimization {
    private basePath: string = '/vrp';
    private host: string;
    private key: string;
    private postTimeout: number = 15000;
    private profile: 'car' | 'small_truck' | 'truck' | 'scooter' | 'foot' | 'hike' | 'bike' | 'mtb' | 'racingbike';
    private services: Service[] = [];
    private vehicles: Vehicle[] = [];
    private vehicleTypes: VehicleType[] = [];
    private waitInMillis: number = 1000;

    constructor(args: {
            key: string;
            profile: 'car' | 'small_truck' | 'truck' | 'scooter' | 'foot' | 'hike' | 'bike' | 'mtb' | 'racingbike';
        }) {
        this.host = 'https://graphhopper.com/api/1';
        this.key = args.key;
        this.profile = args.profile;
        GHUtil.copyProperties(args, this);
    }

    addPoint(input: Point) {
        const service: Service = {
            id: '_' + this.services.length,
            type: 'pickup',
            address: {
                location_id: '_location_' + this.services.length,
                lat: input.lat,
                lon: input.lng
            }
        };
        this.services.push(service);
    }

    addService(service: Service) {
        this.services.push(service);
    }

    addVehicle(vehicle: Vehicle) {
        if (!vehicle.type_id) {
            vehicle.type_id = '_vtype_1';
        }
        this.vehicles.push(vehicle);
    }

    addVehicleType(vehicleType: VehicleType) {
        this.vehicleTypes.push(vehicleType);
    }

    clear() {
        this.services.length = 0;
        this.vehicles.length = 0;
        this.vehicleTypes.length = 0;
    }

    doTSPRequest() {
        this.vehicles.length = 0;
        this.addVehicle({
            vehicle_id: `_vehicle_0`,
            start_address: {
                location_id: '_start_location',
                lon: this.services[0].address.lon,
                lat: this.services[0].address.lat
            }
        });
        return this.doVRPRequest();
    }

    doVRPRequest(): Promise<SolutionResponse> {
        const jsonInput: OptimizeRequest = {
            objectives: [{
                type: 'min-max',
                value: 'completion_time'
            }],
            vehicles: this.vehicles,
            vehicle_types: this.vehicleTypes.concat({
                type_id: '_vtype_1',
                profile: this.profile
            }),
            services: this.services
        };

        return this.doRequest(jsonInput, null);
    }

    doRequest(jsonInput: OptimizeRequest, reqArgs: undefined): Promise<SolutionResponse> {
        const vehicleTypeProfileMap = {};
        const vehicleTypeMap = {};
        const vehicleProfileMap = {};
        const serviceMap = {};
        const shipmentMap = {};
        const locationMap = {};
        const hasCustomCostMatrix = jsonInput.cost_matrices && jsonInput.cost_matrices.length > 0;
        const hasGeometries = jsonInput.configuration && !hasCustomCostMatrix &&
            jsonInput.configuration.routing.calc_points === true;

        if (!hasGeometries) {
            if (!jsonInput.configuration && !hasCustomCostMatrix) {
                jsonInput.configuration = { routing: { calc_points: true } };
            }
        }

        if (jsonInput.vehicle_types) {
            for (const type of jsonInput.vehicle_types) {
                vehicleTypeProfileMap[type.type_id] = type.profile;
                vehicleTypeMap[type.type_id] = type;
            }
        }

        if (jsonInput.services) {
            for (const service of jsonInput.services) {
                locationMap[service.address.location_id] = service.address;
                serviceMap[service.id] = service;
            }
        }

        if (jsonInput.shipments) {
            for (const shipment of jsonInput.shipments) {
                locationMap[shipment.pickup.address.location_id] = shipment.pickup.address;
                locationMap[shipment.delivery.address.location_id] = shipment.delivery.address;
                shipmentMap[shipment.id] = shipment;
            }
        }

        const breakMap = {};
        const vehicleMap = {};
        if (jsonInput.vehicles) {
            for (const vehicle of jsonInput.vehicles) {
                vehicleMap[vehicle.vehicle_id] = vehicle;
                let profile = null;
                if (vehicle.type_id !== null) {
                    profile = vehicleTypeProfileMap[vehicle.type_id];
                    vehicleProfileMap[vehicle.vehicle_id] = profile !== null ? profile : 'car';
                } else {
                    vehicleProfileMap[vehicle.vehicle_id] = 'car';
                }

                if (vehicle.start_address) {
                    locationMap[vehicle.start_address.location_id] = vehicle.start_address;
                }
                if (vehicle.end_address) {
                    locationMap[vehicle.end_address.location_id] = vehicle.end_address;
                }
                if (vehicle.break) {
                    const breakId = vehicle.vehicle_id + '_break';
                    breakMap[breakId] = vehicle.break;
                }
            }
        }

        const promise = this.doRawRequest(jsonInput, reqArgs);
        promise.then((json: { solution: any; raw_solution: any; }) => {
            if (json.solution) {
                const sol = json.solution;
                json.raw_solution = JSON.parse(JSON.stringify(sol));
                sol.calc_points = hasGeometries;

                for (const route of sol.routes) {
                    const vehicleId = route.vehicle_id;
                    const profile = vehicleProfileMap[vehicleId];
                    route.profile = profile;
                    for (const act of route.activities) {
                        act.address = locationMap[act.location_id];
                        if (act.id) {
                            const driverBreak = breakMap[act.id];
                            if (driverBreak) {
                                act.break = breakMap[act.id];
                            } else if (serviceMap[act.id]) {
                                act.service = serviceMap[act.id];
                            } else if (shipmentMap[act.id]) {
                                act.shipment = shipmentMap[act.id];
                            }
                        } else {
                            const vehicle = vehicleMap[vehicleId];
                            act.vehicle = vehicle;
                            act.vehicle_type = vehicleTypeMap[vehicle.type_id];
                        }
                    }
                }
                const unassignedServices = new Array();
                for (const serviceId of sol.unassigned.services) {
                    unassignedServices.push(serviceMap[serviceId]);
                }
                sol.unassigned_services = unassignedServices;

                const unassignedShipments = new Array();
                for (const shipmentId of sol.unassigned.shipments) {
                    unassignedShipments.push(shipmentMap[shipmentId]);
                }
                sol.unassigned_shipments = unassignedShipments;
            }
            return json;
        });
        return promise;
    }

    private doRawRequest(jsonInput: any, reqArgs: any) {
        return new Promise(
            (resolve: { (arg0: any): void; (arg0: any): void; }, reject: { (arg0: any): void; (arg0: any): void; }) => {
                let args = GHUtil.clone(this);
                if (reqArgs) {
                    args = GHUtil.copyProperties(reqArgs, args);
                }

                const url = args.host + args.basePath + '/optimize?key=' + args.key;

                request
                    .post(url)
                    .send(JSON.stringify(jsonInput))
                    .accept('application/json; charset=utf-8')
                    .type('application/json')
                    .timeout(args.postTimeout)
                    .end((err: any, res: { ok: boolean; body: OptimizeResponse; }) => {
                        if (err || !res.ok) {
                            reject(GHUtil.extractError(res, url));
                        } else if (res) {
                            const solutionUrl =
                                `${args.host}${args.basePath}/solution/${res.body.job_id}?key=${args.key}`;
                            const timerRet: number = window.setInterval(
                                () => this.pollTrigger(
                                    solutionUrl, args.postTimeout, timerRet, url, reject, resolve), this.waitInMillis);
                        }
                    });
            });
    }

    private pollTrigger(solutionUrl: string, timeout: number, timerRet, url: string, reject, resolve) {
        request
            .get(solutionUrl)
            .accept('application/json')
            .timeout(timeout)
            .end((err: any, res: { ok: boolean; body: SolutionResponse; }) => {
                if (err || !res.ok || res.body === undefined) {
                    clearInterval(timerRet);
                    reject(GHUtil.extractError(res, url));
                } else if (res && (res.body.status === 'finished')) {
                    clearInterval(timerRet);
                    resolve(res.body);
                }
            });
    }
}
