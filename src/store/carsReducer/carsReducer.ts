import { ActionCreator, Reducer } from 'redux';
import { CarsActionsType, CARS_REQUEST, CARS_REQUEST_ERROR, CARS_REQUEST_SUCCESS, ICar, ICarsRequestActionType, ICarsRequestErrorActionType, ICarsRequestSuccessActionType, ICarsState } from './carsReducerTypes';

const initialState = {
    loading: false,
    error: null,
    cars: [],
}

export const carsReducer: Reducer<ICarsState, CarsActionsType> = (state = initialState, action: CarsActionsType): ICarsState => {
    switch (action.type) {
        case CARS_REQUEST:
            return {...state, loading: true}
        case CARS_REQUEST_SUCCESS:
            return {...state, loading: false, cars: action.payload}
        case CARS_REQUEST_ERROR:
            return {...state, loading: false, error: action.payload}
        default: 
            return state;
    }
}

export const carsRequestAction: ActionCreator<ICarsRequestActionType> = () => ({
    type: CARS_REQUEST
})

export const carsRequestSuccessAction: ActionCreator<ICarsRequestSuccessActionType> = (cars: ICar[]) => ({
    type: CARS_REQUEST_SUCCESS,
    payload: cars
})

export const carsRequestErrorAction: ActionCreator<ICarsRequestErrorActionType> = (error: Error) => ({
    type: CARS_REQUEST_ERROR,
    payload: error
})