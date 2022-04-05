import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { YMaps, Map, Placemark, YMapsApi } from 'react-yandex-maps';
import { addressAction, coordsAction } from '../../store/addressReducer/addressReducer';
import { IAddressState } from '../../store/addressReducer/addressRreducerTypes';
import { fetchCars } from '../../store/carsReducer/carsReducerAsync';
import { ICar } from '../../store/carsReducer/carsReducerTypes';
import { getAddress, getCoords } from './mapUtils';

interface IMapComponentProps {
	cars: ICar[];
	orderPoint: IAddressState;
}

function MapComponent({ cars, orderPoint }: IMapComponentProps ) {
	const [ymaps, setYmaps] = useState<YMapsApi>();
	const [placemarkCoords, setPlacemarkCoords] = useState<[number, number]>()
	const [address, setAddress] = useState('');
	const [isAddress, setIsAddress] = useState(false);
	
	const { address: stateAddress } = orderPoint;
	const dispatch = useDispatch();

	useEffect(() => {
		if (placemarkCoords !== undefined) {
			dispatch(coordsAction(placemarkCoords))
			getAddress(ymaps, placemarkCoords, setAddress, setIsAddress)

		}
	}, [placemarkCoords])
	
	useEffect(() => {
		if (address !== '') {
			dispatch(addressAction(address))
		}
	}, [address])
	
	useEffect(() => {
		if (stateAddress && stateAddress !== address) {
			getCoords(ymaps, stateAddress, setPlacemarkCoords, setIsAddress)
		}
		if (stateAddress === address) {
			dispatch(fetchCars(orderPoint))
		}
	}, [stateAddress])
	
	

	const getCoordsOnClick = (event: YMapsApi) => {
		const coords = event.get('coords')
		setIsAddress(true)
		setPlacemarkCoords(coords)
	}

	const getCoordsOnDrag = (event: YMapsApi) => {
		const coords = event.get('target').geometry.getCoordinates()
		setIsAddress(true)
		setPlacemarkCoords(coords)
	}


	return (
		<div>
			<YMaps query={{
				ns: "use-load-option",
				apikey: 'map_api_key',
				load: 'package.full'
				}} >
					<Map
						defaultState={{ center: [56.84776260604469,53.227425238159135], zoom: 13, controls: [] }}
						width='100%' height={300}
						onLoad={(ymaps) => setYmaps(ymaps)}
						onClick={getCoordsOnClick}>
							<Placemark 
								properties={{ iconCaption: `${isAddress ? address : 'Адрес не найден, укажите н...'}`, balloonContent: 'Адрес не корректен, укажите номер дома'}}
								geometry={placemarkCoords}
								options={{iconColor: `${isAddress ? '#FFCF40' : 'red'}`, draggable: true, }}
								onDragEnd={getCoordsOnDrag}/>
							{cars.length 
								? cars.map(car => <Placemark
														key={car.crew_id}
														properties={{ iconCaption: `${car.car_mark} ${car.car_model}`}}
														geometry={[car.lat, car.lon]}
														options={{iconColor: 'green'}} />)
								: null }
					</Map>
			</YMaps>
		</div>
	)
}



export default MapComponent