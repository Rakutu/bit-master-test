import { Dispatch, SetStateAction } from "react";
import { YMapsApi } from "react-yandex-maps";
import { TAddressCoords, TAddressName } from "../../store/addressReducer/addressRreducerTypes";

export const getAddress = (ymaps: YMapsApi | undefined, coords: TAddressCoords | undefined, setAddress: Dispatch<SetStateAction<string>>, setIsAddress: Dispatch<SetStateAction<boolean>>) => {
    if (!ymaps) return

    ymaps.geocode(coords).then((res: YMapsApi) => {
        const geoObject = res.geoObjects.get(0)

        const premiseNumber = geoObject.getPremiseNumber();
        const address = [
            geoObject.getLocalities().length ? geoObject.getLocalities() : geoObject.getAdministrativeAreas(),
            geoObject.getThoroughfare() || geoObject.getPremise(),
            premiseNumber
        ].filter(Boolean).join(', ');


        if (!premiseNumber) {
            setIsAddress(false)
            return
        }

        setAddress(address)
    })
}


export const getCoords = (ymaps: YMapsApi | undefined, address: TAddressName | undefined, setCoords: Dispatch<SetStateAction<[number , number ] | undefined>>, setIsAddress: Dispatch<SetStateAction<boolean>>) => {
    if (!ymaps) return ''

    ymaps.geocode(`Ижевск ${address}`)
        .then((res: any) => {
            const geoObjects = res.geoObjects.get(0)
            const address = geoObjects.getThoroughfare();
            const premiseNumber = geoObjects.getPremiseNumber();

            if (!address && !premiseNumber) {
                setIsAddress(false)
                return
            }

            setIsAddress(true)
            const coords = res.geoObjects.get(0).geometry.getCoordinates();
            setCoords(coords)
        })
}