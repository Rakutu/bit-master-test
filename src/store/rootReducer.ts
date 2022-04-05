import { combineReducers } from "redux";
import { addressReducer } from "./addressReducer/addressReducer";
import { carsReducer } from './carsReducer/carsReducer';

const rootReducer = combineReducers({
	address: addressReducer,
	cars: carsReducer,
})

export type rootReducerTypes = ReturnType<typeof rootReducer>;

export default rootReducer