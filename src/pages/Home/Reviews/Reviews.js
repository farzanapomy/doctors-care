import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardMedia, Container, Grid, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const Reviews = () => {
    const [reviews, setReviews] = useState([])
    useEffect(() => {
        fetch('https://cryptic-eyrie-03713.herokuapp.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])




    return (
        <Container>
            <div >
                <h2>
                    <h1>Testimonials</h1>
                </h2>



            </div>



            <Grid className="" container spacing={2} >

                {
                    reviews.map(review => <Grid xs={12} md={4}
                        key={review._id}

                    >

                        <Card className='single-service ' sx={{ width: "80%", maxHeight: '105%', my: 1, padding: '25px' }}>
                            <CardMedia
                                component="img"
                                height="194"
                                src={review.img}
                            />
                            <CardContent>
                                <Typography >{review.title}</Typography>
                                <Typography>
                                    {review.description}
                                </Typography>
                                <Typography >
                                    Rating:   {review.rating}
                                </Typography >
                            </CardContent>


                        </Card>
                    </Grid>)
                }
            </Grid>

        </Container >
    );
};

export default Reviews;