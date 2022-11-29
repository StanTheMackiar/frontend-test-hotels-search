import { SearchResultsMinimized, IApiResponse, IQuerySearch, SearchResults, CustomResponse, BadResponse } from "../interfaces";



const BASE_URL = 'https://hotels4.p.rapidapi.com/properties/list?'
const options = {
    headers: {
        "X-RapidAPI-Key": process.env.API_KEY || '',
        "X-RapidAPI-Host": process.env.API_HOST || '',
    }
};


export const getHotels = async( { destinationId, pageNumber, pageSize, checkIn, checkOut, adults1 }: IQuerySearch):Promise<CustomResponse | BadResponse> => {
    
    try {
        const res = await fetch(`${BASE_URL}destinationId=${destinationId}&pageNumber=${pageNumber}&pageSize=${pageSize}&checkIn=${checkIn}&checkOut=${checkOut}&adults1=${adults1}`, options)
        const response: IApiResponse = await res.json();
        const { data } = response;

        const destination = data.body.query.destination.value;
        const totalResults = data.body.searchResults.totalCount;
        const results: SearchResultsMinimized[] = data.body.searchResults.results.map( hotel => ({

                id: hotel.id,
                image: hotel.optimizedThumbUrls.srpDesktop,
                locality: hotel.address.locality,
                name: hotel.name,
                price: hotel.ratePlan.price.exactCurrent,
                reviews: {
                    rating: hotel.guestReviews.rating,
                    scale: hotel.guestReviews.scale,
                    total: hotel.guestReviews.total,
                }
            }))

        return {
            destination,
            results,
            totalResults
        }


    } catch (error) {
        console.log(error);
        return { error: 'Error en la base de datos' }
    }
}


