import { Address } from './Address';
import { Profile } from './index';
export interface Configuration {
    routing: Routing;
}
export interface Routing {
    calc_points?: boolean;
    network_data_provider?: 'openstreetmap' | 'tomtom';
    consider_traffic?: boolean;
    fail_fast?: boolean;
}
export interface Objective {
    type?: 'min' | 'min-max';
    value?: 'transport_time' | 'completion_time' | 'vehicles' | 'activities';
}
export interface CostMatrixData {
    times: number[][];
    distances: number[][];
}
export interface CostMatrix {
    profile: Profile;
    type?: string;
    location_ids?: string[];
    data?: CostMatrixData;
}
export interface Break {
    earliest?: number;
    latest?: number;
    max_driving_time?: number;
    duration: number;
    possible_split?: number[];
    initial_driving_time?: number;
}
export interface Vehicle {
    vehicle_id: string;
    start_address: Address;
    end_address?: Address;
    return_to_depot?: boolean;
    type_id?: string;
    earliest_start?: number;
    latest_end?: number;
    break?: Break;
    skills?: string[];
    max_distance?: number;
    max_driving_time?: number;
    max_jobs?: number;
    max_activities?: number;
}
export interface VehicleType {
    type_id: string;
    profile: Profile;
    capacity?: number[];
    speed_factor?: number;
    service_time_factor?: number;
}
export interface TimeWindow {
    earliest: number;
    latest: number;
}
export interface ServiceCommon {
    id: string;
    name?: string;
    size?: number[];
    required_skills?: string[];
    allowed_vehicles?: string[];
    disallowed_vehicles?: string[];
    priority?: number;
    max_time_in_vehicle?: number;
}
export interface PickupDelivery {
    address: Address;
    duration?: number;
    time_windows?: TimeWindow[];
    preparation_time?: number;
}
export interface Service extends ServiceCommon, PickupDelivery {
    type?: 'service' | 'pickup' | 'delivery';
}
export interface Shipment extends ServiceCommon {
    pickup: PickupDelivery;
    delivery: PickupDelivery;
}
export interface OptimizeRequest {
    configuration?: Configuration;
    objectives?: Objective[];
    cost_matrices?: CostMatrix[];
    services?: Service[];
    shipments?: Shipment[];
    vehicles: Vehicle[];
    vehicle_types?: VehicleType[];
}
