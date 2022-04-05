
import { FaCarAlt } from 'react-icons/fa';
import { ICar } from '../../../store/carsReducer/carsReducerTypes';

interface ICarItemProps {
    car: ICar;
    handleChangeChooseCarId: (id: number) => void;
}

function CarItem({ car, handleChangeChooseCarId }: ICarItemProps) {
  return (
    <div className='d-flex border-bottom justify-content-between align-items-center' onClick={() => handleChangeChooseCarId(car.crew_id)} style={{cursor: 'pointer'}}>
        <FaCarAlt style={{fontSize: '40px'}}/>
        <div>
            <h5 className='mb-0'>{car.car_mark} {car.car_model}</h5>
            <p className='mb-0 text-secondary'>{car.car_color}</p>
        </div>
        <p>{car.distance} м</p>
    </div>
  )
}

export default CarItem