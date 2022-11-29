import axios from 'axios';
import { IQuerySearch } from '../interfaces';


export const apiHotel = ({ destinationId, pageNumber, pageSize, checkIn, checkOut, adults1 }: IQuerySearch) => {
    
    const instance = axios.create({
       baseURL: 'https://hotels4.p.rapidapi.com/properties/list?',
       params: {
           destinationId,
           pageNumber,
           pageSize,
           checkIn, 
           checkOut, 
           adults1
       },
       headers: {
        "X-RapidAPI-Key": process.env.API_KEY || '',
        "X-RapidAPI-Host": process.env.API_HOST || '',
    }
   })

   return instance;
}