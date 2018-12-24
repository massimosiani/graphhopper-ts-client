export interface Configuration {
    calc_points?: boolean;
    network_data_provider?: 'openstreetmap' | 'tomtom';
    consider_traffic?: boolean;
    fail_fast?: boolean;
}

export interface Objective {
    type: 'min' | 'min-max';
    value: 'transport_time' | 'completion_time' | 'vehicles' | 'activities';
}

export interface Address {
    location_id: string;
    lon: number;
    lat: number;
    name?: string;
    street_hint?: string;
}

export interface Break {
    earliest: number;
    latest: number;
    max_driving_time: number;
    duration: number;
    possible_split: number[];
    initial_driving_time: number;
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
    profile?: 'car' | 'small_truck' | 'truck' | 'scooter' | 'foot' | 'hike' | 'bike' | 'mtb' | 'racingbike';
    capacity?: number[];
    speed_factor?: number;
    service_time_factor?: number;
}

export interface TimeWindow {
    earliest: number;
    latest: number;
}

export interface Service {
    id: string;
    type?: 'service' | 'pickup' | 'delivery';
    name?: string;
    address: Address;
    duration?: number;
    size?: number[];
    time_windows?: TimeWindow[];
    required_skills?: string[];
    allowed_vehicles?: string[];
    disallowed_vehicles?: string[];
    priority?: number;
    preparation_time?: number;
}

export interface OptimizeRequest {
    configuration: Configuration;
    objectives?: Objective[];
    services?: Service[];
    vehicles: Vehicle[];
    vehicle_types?: VehicleType[];
}
