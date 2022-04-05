export const ADDRESS_NAME_ACTION = 'ADDRESS_NAME_ACTION';
export const ADDRESS_COORDS_ACTION = 'ADDRESS_COORDS_ACTION';

export type TAddressName = string | null;

export type TAddressCoords = [number | null, number | null];

export interface IAddressState {
  address: TAddressName;
  lat: TAddressCoords[0];
  lon: TAddressCoords[1];
}

export interface IAddressNameAction {
  type: typeof ADDRESS_NAME_ACTION;
  payload: string
}

export interface IAddressCoordsAction {
  type: typeof ADDRESS_COORDS_ACTION;
  payload: [number, number];
}

export type TAddressActionTypes = IAddressNameAction | IAddressCoordsAction;