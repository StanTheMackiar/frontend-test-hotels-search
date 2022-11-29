import moment from "moment";


export const getDateDifference = ( checkIn: string, checkOut:string ) => {

    const date1 = moment(checkIn);
    const date2 = moment(checkOut)

    return date2.diff(date1, 'days')
}