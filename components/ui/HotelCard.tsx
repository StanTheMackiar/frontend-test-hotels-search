import { Box, Card, CardMedia, CardActionArea, CardActions, Grid, CardContent, Typography, Chip } from '@mui/material';
import { FC } from 'react'
import { Result } from '../../interfaces';
import NightlightIcon from '@mui/icons-material/Nightlight';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import { SearchResultsMinimized } from '../../interfaces/customResponse';
import { currency } from '../../utils';

interface Props {
    hotel: SearchResultsMinimized;
    stayDays: number;
}


export const HotelCard:FC<Props> = ({ hotel, stayDays }) => {

    const { image, locality, name, price, reviews } = hotel
    const { rating, scale, total } = reviews

    const priceFormated = currency.format( price );
    const totalPrice = currency.format( price * stayDays )

   return (
    <Grid item xs={12} lg={6}>
        <Card>
            <CardActionArea sx={{display: 'flex', alignItems: 'start', flexDirection: {xs: 'column', md: 'row'}}}>

                <CardMedia
                    component='img'
                    image={ image }
                    alt={ `Fotografía del hotel ${ name }` }
                    sx={{flex: 3, height: 160}}
                />
                <CardContent
                    sx={{flex: 7, display: 'flex', flexDirection: 'column', width: '100%'}}
                >
                    
                    <Typography variant='h2'>{ name }</Typography>
                    <Typography variant='subtitle2'>{ locality }</Typography>

                    <Box display='flex' flexDirection={{xs: 'row'}} justifyContent='space-between' alignItems='flex-end'>

                        <Box>
                            <Typography variant='subtitle2' sx={{ color: 'secondary.main' }}>Totalmente reembolsable</Typography>
                            
                            <Box display='flex' flexDirection='row' alignItems='center'>
                                <NightlightIcon sx={{ color: 'purple', fontSize: '1rem' }} />
                                <Typography variant='body2'>Acumula sellos</Typography>
                            </Box>

                            <Typography variant='body2'>
                                <strong>{`${ rating }/${ scale }`}</strong> {`(${ total} ${ total <= 1 ? 'opinión' : 'opiniones'})`}
                            </Typography>
                        </Box>
                        

                        <Box display='flex' flexDirection='column' alignItems='flex-end'>

                            <Chip sx={{width:200}} size='small' icon={<LocalOfferIcon/>} label="Precio secreto disponible" color='secondary'/>
                            <Typography variant='h3' sx={{ mt: 1 }}>{ `${priceFormated} USD` }</Typography>
                            <Typography variant='body2' sx={{ mt: 1 }}>{ `${totalPrice} USD en total` }</Typography>

                        </Box>
                    </Box>

                </CardContent>


            </CardActionArea>
        </Card>
    </Grid>

   ) 
}