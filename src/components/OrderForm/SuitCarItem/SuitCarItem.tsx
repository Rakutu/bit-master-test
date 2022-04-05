import { FaCarAlt } from 'react-icons/fa';
import { ICar } from '../../../store/carsReducer/carsReducerTypes';

function SuitCarItem({ car }: { car: ICar }) {
    return (
        <div>
            <h4>Подходящий экипаж:</h4>
            <div className='d-flex border justify-content-evenly align-items-center p-2 mb-3' style={{width: '300px'}}>
                <FaCarAlt style={{fontSize: '40px'}}/>
                <div>
                    <h5>{car.car_mark} {car.car_model}</h5>
                    <p>{car.car_color}</p>
                    <div className='border text-secondary' style={{textAlign: 'center'}}>{car.car_number}</div>
                </div>
            </div>
        </div>
    )
}

export default SuitCarItem