
import { ICar } from '../../store/carsReducer/carsReducerTypes';
import Spiner from '../shared/Spiner/Spiner';
import CarItem from './CarItem/CarItem';

interface ICarsListProps {
	cars: ICar[];
	loading: boolean;
	handleChangeChooseCarId: (id: number) => void;
}

function CarsList({ cars, loading, handleChangeChooseCarId }: ICarsListProps) {
    return (
		<div className='container border position-relative' style={{width: '100%', height: '100%'}}>
			<h3 style={{textAlign: 'center'}} >Ближайшие машины</h3>
			{loading 
				? <Spiner /> 
				: cars.map(car => <CarItem key={car.crew_id} car={car} handleChangeChooseCarId={handleChangeChooseCarId} />)}
		</div >
    )
}

export default CarsList