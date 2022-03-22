import React, { useEffect } from 'react';
import { Card, CardContent,  CardMedia, Typography } from '@mui/material'
import './Service.css'
import { Link } from 'react-router-dom';
const Service = ({ service }) => {
    const { name, img, description, charge } = service;

    return (

        <div className='single-total ' >

            <Card className='total-service'>
                <Card className='single-service '>
                    <CardMedia variant="top" src={img} />
                    <CardContent>
                        <Typography >{name}</Typography>
                        <Typography>
                            {description}
                        </Typography>
                        <Typography >
                            Charge :${charge}
                        </Typography >
                    </CardContent>

                    <Link to={`/services/${service._id}`} className='service-btn border-0'>
                        {/* <input type="Order Now" /> */}
                        <button >Order now</button>
                    </Link>
                </Card>
            </Card >


        </div>

    );
};

export default Service;