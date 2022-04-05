import { ActionCreator, Reducer } from "redux"
import { ADDRESS_COORDS_ACTION, ADDRESS_NAME_ACTION, TAddressActionTypes, IAddressNameAction, IAddressState, IAddressCoordsAction } from "./addressRreducerTypes";

const initialState = {
    address: null,
    lat: null,
    lon: null,
}


export const addressReducer: Reducer<IAddressState, TAddressActionTypes> = (state = initialState, action: TAddressActionTypes): IAddressState => {
    switch (action.type) {
        case ADDRESS_NAME_ACTION:
            return {...state, address: action.payload}
        case ADDRESS_COORDS_ACTION:
            return {...state, lat: action.payload[0], lon: action.payload[1]}
        default:
            return state
    }
}

export const addressAction: ActionCreator<IAddressNameAction> = (address: string) => ({
    type: ADDRESS_NAME_ACTION,
    payload: address
})

export const coordsAction: ActionCreator<IAddressCoordsAction> = (coords: [number, number]) => ({
    type: ADDRESS_COORDS_ACTION,
    payload: coords
})