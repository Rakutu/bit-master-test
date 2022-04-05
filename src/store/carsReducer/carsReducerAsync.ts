import { Dispatch } from 'redux';
import getDateString from '../../utils/getDate';
import { IAddressState } from '../addressReducer/addressRreducerTypes';
import { carsRequestAction, carsRequestErrorAction, carsRequestSuccessAction } from './carsReducer';
import { CarsActionsType } from './carsReducerTypes';

interface IOrderPoint {
    source_time: string;
    addresses: IAddressState[]
}

export const fetchCars = (order: IAddressState) => {

    return (dispatch: Dispatch<CarsActionsType>) => {
		// const sourceTime = new Date().toISOString().split('T').join('').split('-').join('').split(':').join('').split('.')[0]
		const sourceTime = getDateString(Date.now())
		const orderPoint: IOrderPoint = {
			source_time: sourceTime,
			addresses: [
				order
			]
		} 

        dispatch(carsRequestAction())

		console.log(orderPoint)

        new Promise((resolve) => {
			setTimeout(() => {
				resolve(mockData)
			}, 1000)
        })
        .then((res: any) => {
            if (res.descr !== 'OK') {
                alert('Машина не найдена')
            }
            dispatch(carsRequestSuccessAction(res.data.crews_info))
        })
        .catch((error: Error) => {
            dispatch(carsRequestErrorAction(error))
        })
    }
}


const mockData = {
  "code":0,
  "descr":"OK",
  "data":{
    "crews_info":[
      {
        "crew_id":123,
        "car_mark":"Chevrolet",
        "car_model":"Lacetti",
        "car_color":"синий",
        "car_number":"Е234КУ",
        "driver_name":"Деточкин",
        "driver_phone":"7788",
        "lat":56.855532,
        "lon":53.217462,
        "distance":300
      },{
        "crew_id":125,
        "car_mark":"Hyundai",
        "car_model":"Solaris",
        "car_color":"белый",
        "car_number":"Ф567АС",
        "driver_name":"Петров",
        "driver_phone":"8899",
        "lat":56.860581,
        "lon":53.209223,
        "distance":600
      },{
        "crew_id":127,
        "car_mark":"Lada",
        "car_model":"Oka",
        "car_color":"красный",
        "car_number":"о111оо",
        "driver_name":"Глухов",
        "driver_phone":"8899",
        "lat":56.840979763262986,
        "lon":53.21560206082148,
        "distance":900
      },{
        "crew_id":129,
        "car_mark":"Porsce",
        "car_model":"911",
        "car_color":"Зеленый",
        "car_number":"х999хх",
        "driver_name":"Иванов",
        "driver_phone":"8899",
        "lat":56.85081,
        "lon":53.209238,
        "distance":1200
      }
    ]
  }
}
