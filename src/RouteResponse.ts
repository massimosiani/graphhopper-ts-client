export interface Hints {
    visited_nodes: VisitedNodes;
}

export interface VisitedNodes {
    average: string;
    sum: string;
}

export interface Info {
    copyrights: string[];
    took: number;
}

export interface Instruction {
    distance: number;
    heading: number;
    sign: number;
    interval: number[];
    text: string;
    time: number;
    street_name: string;
    last_heading?: number;
    exit_number?: number;
    exited?: boolean;
    turn_angle?: number;
}

export interface Details {
}

export interface Path {
    distance: number;
    weight: number;
    time: number;
    transfers: number;
    points_encoded: boolean;
    bbox: number[];
    points: string;
    instructions: Instruction[];
    legs: any[];
    details: Details;
    ascend: number;
    descend: number;
    snapped_waypoints: string;
}

export interface RouteResponse {
    hints: Hints;
    info: Info;
    paths: Path[];
}
