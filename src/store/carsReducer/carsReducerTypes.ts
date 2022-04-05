
export const CARS_REQUEST = 'CARS_REQUEST';
export const CARS_REQUEST_SUCCESS = 'CARS_REQUEST_SUCCESS';
export const CARS_REQUEST_ERROR = 'CARS_REQUEST_ERROR';

export interface ICar {
    crew_id: number;
    car_mark: string;
    car_model: string;
    car_color: string;
    car_number: string;
    driver_name: string;
    driver_phone: string;
    lat: number;
    lon: number;
    distance: number;
}

export interface ICarsState {
    loading: boolean;
    error: Error | null;
    cars: ICar[] | [];
}

export interface ICarsRequestActionType {
    type: typeof CARS_REQUEST;
}

export interface ICarsRequestSuccessActionType {
    type: typeof CARS_REQUEST_SUCCESS;
    payload: ICar[]
}

export interface ICarsRequestErrorActionType {
    type: typeof CARS_REQUEST_ERROR;
    payload: Error;
}

export type CarsActionsType = ICarsRequestActionType | ICarsRequestSuccessActionType | ICarsRequestErrorActionType;