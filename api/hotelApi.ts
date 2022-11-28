import axios from "axios";


const hotelApi = axios.create({
    baseURL: 'https://hotels4.p.rapidapi.com/properties/list?',
    headers: {
        "X-RapidAPI-Key": "eaf08ca640mshc3061bfeb3d9c7dp1abae6jsna40a7e591c08",
        "X-RapidAPI-Host": "hotels4.p.rapidapi.com"
    }
});

export default hotelApi