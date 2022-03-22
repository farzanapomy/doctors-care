import { Typography, Grid, Container, Button } from '@mui/material';
import React, { useEffect, useState } from 'react';
import { Card, CardContent, CardMedia } from '@mui/material'
import { Link } from 'react-router-dom';


const Doctors = () => {

    const [doctors, setDoctors] = useState([])
    useEffect(() => {
        fetch('https://cryptic-eyrie-03713.herokuapp.com/doctors')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])


   

    return (
        <Container>
            <Typography variant='h4' sx={{ margin: "15px", mb: 5 }}>Our Doctors Team</Typography>
            <Grid className="" container spacing={2} >

                {
                    doctors.map(doctor => <Grid xs={12} md={4}
                        key={doctor._id}

                    >

                        <Card className='single-service ' sx={{ width: "80%", maxHeight: '105%', my: 1, padding: '25px' }}>
                            <CardMedia
                                component="img"
                                height="194"
                                src={doctor.img}
                            />
                            <CardContent>
                                <Typography >{doctor.title}</Typography>
                                <Typography>
                                    {doctor.description}
                                </Typography>
                                <Typography >
                                    AvailableTime:   {doctor.AvailableTime}
                                </Typography >
                            </CardContent>

                            
                        </Card>
                    </Grid>)
                }
            </Grid>
        </Container>
    );
};

export default Doctors;