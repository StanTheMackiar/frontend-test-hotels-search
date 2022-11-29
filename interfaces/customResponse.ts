

export interface CustomResponse {
    destination: string;
    results: SearchResultsMinimized[];
    totalResults: number;
}    

export interface SearchResultsMinimized {
    id: number,
    image: string;
    locality: string;
    name: string;
    price: number;
    reviews: Reviews
}

interface Reviews {
    rating: string;
    scale: number;
    total: number;
}