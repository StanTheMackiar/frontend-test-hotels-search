import { GetServerSideProps, NextPage } from 'next';

import { Grid, Typography } from '@mui/material';

import { MainLayout, HotelCard } from '../components';
import { CustomResponse, IQuerySearch } from '../interfaces';
import { date } from '../utils';
import { apiHotel } from '../api';



interface Props {
  searchResults: CustomResponse;
  query: IQuerySearch;
}


const HomePage: NextPage<Props> = ({ searchResults, query }) => {

  const { destination, results, totalResults } = searchResults;
  const { checkIn, checkOut } = query
  const stayDays = date.getDateDifference( checkIn, checkOut )
 
  return (
    <MainLayout title={ `Buscar Hoteles | ${ totalResults } results` } description='Encuentra aquí tus hoteles al mejor precio del mercado!' >

      <Typography variant='subtitle1'>{ totalResults } resultados</Typography>
      <Typography marginBottom={ 1 } variant='body1'>{ destination }</Typography>
      
      <Grid container spacing={ 3 }>
        {
           results.map( hotel => (
                <HotelCard key={ hotel.id } hotel={ hotel } stayDays={ stayDays } />
            ))
        }
      </Grid>
       
    </MainLayout>
  )
}





export const getServerSideProps: GetServerSideProps = async ({ query }) => {

  const searchResults = await apiHotel.getHotels( query as IQuerySearch )

  return {
    props: {
      searchResults,
      query,
    } 
  }
}


export default HomePage