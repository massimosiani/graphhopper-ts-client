import { OptimizeRequest, Service, Vehicle, VehicleType } from './OptimizeRequest';
import Point from './Point';
import { SolutionResponse } from './SolutionResponse';
export declare class GraphHopperOptimization {
    private basePath;
    private host;
    private key;
    private postTimeout;
    private profile;
    private services;
    private vehicles;
    private vehicleTypes;
    private waitInMillis;
    constructor(args: {
        key: string;
        profile: 'car' | 'small_truck' | 'truck' | 'scooter' | 'foot' | 'hike' | 'bike' | 'mtb' | 'racingbike';
    });
    addPoint(input: Point): void;
    addService(service: Service): void;
    addVehicle(vehicle: Vehicle): void;
    addVehicleType(vehicleType: VehicleType): void;
    clear(): void;
    doTSPRequest(): Promise<SolutionResponse>;
    doVRPRequest(): Promise<SolutionResponse>;
    doRequest(jsonInput: OptimizeRequest, reqArgs: undefined): Promise<SolutionResponse>;
    private doRawRequest;
    private pollTrigger;
}
