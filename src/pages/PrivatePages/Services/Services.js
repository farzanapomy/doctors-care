import React, { useEffect, useState } from 'react';
import './Services.css'
import { Container } from '@mui/material';
import { Button, Card, CardContent, CardMedia, Grid, Typography } from '@mui/material'
import { Link } from 'react-router-dom';
import axios from 'axios';



const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://cryptic-eyrie-03713.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    const handleSubmit = (data) => {
        axios.post('https://cryptic-eyrie-03713.herokuapp.com/appointments', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Your Orders successfully added');
                }
                console.log(res);
            })

        console.log('data');
    }



    return (
        <Container sx={{ my: 5 }}>

            <div className='service-title'>
                <h2>

                    <h1>Our Services</h1>
                </h2>



            </div>

            <Grid className="" container spacing={1} >

                {
                    services.map(service => <Grid xs={12} md={4}
                        key={service._id}
                    >

                        <Grid className='single-total '>

                            <Card className='total-service' sx={{ marginLeft: '5px' }}>
                                <Card className='single-service '>

                                    <CardMedia
                                        component="img"
                                        height="194"
                                        src={service.img}
                                    />
                                    <CardContent>
                                        <Typography >{service.title}</Typography>
                                        <Typography>
                                            {service.description}
                                        </Typography>
                                        <Typography >
                                            Charge :${service.cost}
                                        </Typography >
                                    </CardContent>

                                    <Link to={`/Services/${service._id}`} className='service-btn'>
                                        <button onSubmit={handleSubmit}>Get Appointment</button>
                                    </Link>
                                </Card>
                            </Card >


                        </Grid>
                    </Grid>)
                }
            </Grid>

        </Container >
    );
};

export default Services;