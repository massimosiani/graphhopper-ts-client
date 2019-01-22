import { Address } from './Address';
import { Break, Service, Shipment } from './OptimizeRequest';
declare type ActivityType = 'start' | 'pickup' | 'break' | 'end';
export interface Point {
    coordinates: number[][];
    type: string;
}
export interface Activity {
    type: ActivityType;
    location_id: string;
    address: Address;
    end_time: number;
    end_date_time?: any;
    distance: number;
    driving_time: number;
    preparation_time: number;
    waiting_time: number;
    load_after: number[];
    id: string;
    arr_time?: number;
    arr_date_time?: any;
    load_before: number[];
    break: Break;
}
export interface Route {
    vehicle_id: string;
    distance: number;
    transport_time: number;
    completion_time: number;
    waiting_time: number;
    service_duration: number;
    preparation_time: number;
    points: Point[];
    activities: Activity[];
}
export interface UnassignedDetails {
    id: string;
    code: number;
    reason: string;
}
export interface Unassigned {
    services: Service[];
    shipments: Shipment[];
    breaks: Break[];
    details: UnassignedDetails[];
}
export interface Solution {
    name?: string;
    costs: number;
    distance: number;
    time: number;
    transport_time: number;
    completion_time: number;
    max_operation_time: number;
    waiting_time: number;
    service_duration: number;
    preparation_time: number;
    no_vehicles: number;
    no_unassigned: number;
    routes: Route[];
    unassigned: Unassigned;
}
export interface SolutionResponse {
    copyrights: string[];
    job_id: string;
    status: string;
    waiting_time_in_queue: number;
    processing_time: number;
    solution: Solution;
}
export {};
