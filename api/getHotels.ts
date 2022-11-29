import { AxiosError } from "axios";
import { apiHotel } from ".";
import { SearchResultsMinimized, IQuerySearch, CustomResponse, IApiResponse} from "../interfaces";



export const getHotels = async( params: IQuerySearch):Promise<CustomResponse> => {
    
    try {
        const { data } = await apiHotel( params ).get<IApiResponse>('');

        const destination = data.data.body.query.destination.value;
        const totalResults = data.data.body.searchResults.totalCount;
        const results: SearchResultsMinimized[] = data.data.body.searchResults.results.map( hotel => ({

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


    } catch (err ) {
        console.log(err);
        return {
            error: false,
            destination: '',
            results: [],
            totalResults: 0,
        }
    }
}


