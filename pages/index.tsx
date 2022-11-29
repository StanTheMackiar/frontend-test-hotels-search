import { GetServerSideProps, NextPage } from 'next';

import { Grid, Typography } from '@mui/material';

import { MainLayout, HotelCard } from '../components';
import { CustomResponse, IQuerySearch } from '../interfaces';
import { date } from '../utils';
import { getHotels } from '../api';



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

      <Typography sx={{ display: `${ totalResults ? 'flex' : 'none'}`}} variant='subtitle1'>{ totalResults } resultados</Typography>
      <Typography sx={{ display: `${ destination ? 'flex' : 'none'}`}} marginBottom={ 1 } variant='body1'>{ destination }</Typography>

      {
        results.length > 0
        ? (
            <Grid container spacing={ 3 }>
              {
                results.map( hotel => (
                      <HotelCard key={ hotel.id } hotel={ hotel } stayDays={ stayDays } />
                  ))
              }
            </Grid>
        ) : (
          <Typography variant='h2'>Error en la solicitud, por favor revise los parámetros</Typography>
        )
      }
    
    </MainLayout>
  )
}





export const getServerSideProps: GetServerSideProps = async ({ query }) => {

  const searchResults = await getHotels( query as IQuerySearch )

  return {
    props: {
      searchResults,
      query,
    } 
  }
}


export default HomePage