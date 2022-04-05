import MapComponent from '../Map/MapComponent'
import CarsList from '../CarsList/CarsList'
import styles from './orderForm.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { rootReducerTypes } from '../../store/rootReducer';
import { ChangeEvent, FormEvent, useEffect, useState } from 'react';
import { addressAction } from '../../store/addressReducer/addressReducer';
import { ICar, ICarsState } from '../../store/carsReducer/carsReducerTypes';
import SuitCarItem from './SuitCarItem/SuitCarItem';
import { IAddressState } from '../../store/addressReducer/addressRreducerTypes';
import getDateString from '../../utils/getDate';

function OrderForm() {
    const [value, setValue] = useState('');
    const [isDisable, setIsDisable] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');
    const [chooseCarId, setChooseCarId] = useState(0);

    const dispatch = useDispatch();

    const fullAddress = useSelector<rootReducerTypes, IAddressState>(state => state.address)
    const { address } = fullAddress;

    const { loading, cars} = useSelector<rootReducerTypes, ICarsState>(state => state.cars);

    useEffect(() => {
        if (address) setValue(address)
    }, [address])

    useEffect(() => {
        if (cars.length) {
            setChooseCarId(cars[0].crew_id)
        }
    }, [cars])

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value)
    }

    const handleBlulr = () => {
        dispatch(addressAction(value))
        setIsDisable(false)
        setErrorMessage('')
    }

    const handleChangeChooseCarId = (id: number) => {
        setChooseCarId(id)
    }

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        if (value.length < 1) {
            setIsDisable(true)
            setErrorMessage('Это поле обязательно для заполнения')
            return
        }

        const sourceTime = getDateString(Date.now())
        alert(`Заказ принят`)
        const order = {
            source_time: sourceTime,
            address: fullAddress,
            crew_id: cars[0].crew_id
        }
        console.log('Данные заказа')
        console.log(order)
        setValue('')
    }

    return (
        <form className='position-relative' onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="address" className="form-label">Откуда</label>
                <input  type="text" 
                        id='address' 
                        className={`form-control ${errorMessage ? 'border border-danger' : ''}`} 
                        value={value} 
                        onChange={handleChange} 
                        onBlur={handleBlulr}/>

                <p className='text-danger'>{errorMessage}</p>
            </div>
            {cars.length && chooseCarId ? <SuitCarItem car={cars.filter(car => car.crew_id === chooseCarId)[0]} /> : null}

            <div className="container d-flex mb-4 p-0">
                <div className={styles.mapContainer}>
                    <MapComponent cars={cars} orderPoint={fullAddress}/>
                </div>
                <div className={styles.carsListContainer}>
                    <CarsList cars={cars} loading={loading} handleChangeChooseCarId={handleChangeChooseCarId}/>
                </div>
            </div>

            <button className="btn btn-primary position-absolute start-50 translate-middle-x" type='submit' disabled={isDisable}>Заказать</button>
        </form>
    )
}

export default OrderForm