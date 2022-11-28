import { GetServerSideProps, NextPage } from 'next';
import { Typography } from "@mui/material";
import { MainLayout } from '../components/layouts';


interface Props {
  hotels: any
}


const HomePage: NextPage<Props> = ({ hotels }) => {



  return (
    <MainLayout title={`Showing 10 results | Hotel Search`} description='Found here the best hotels at the best price!' >

    </MainLayout>
  )
}





export const getServerSideProps: GetServerSideProps = async (ctx) => {
  

  return {
    props: {
      
    }
  }
}


export default HomePage