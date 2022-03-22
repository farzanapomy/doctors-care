import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css'
import { Grid } from '@mui/material';

const Services = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('https://cryptic-eyrie-03713.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    


    return (
        <div className=' my-5 '>

            <div className='service-title'>
                <h2>

                    <h1>Our Services</h1>
                </h2>



            </div>

            <Grid xs={12} md={3} className="" >

                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </Grid>

        </div >
    );
};

export default Services;