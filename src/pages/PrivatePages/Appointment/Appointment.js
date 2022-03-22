import { Button, CardMedia, Container, Grid, TextField, Typography } from '@mui/material';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Appointment = () => {
    const { ID } = useParams()
    const { user } = useAuth()
    const [data, setData] = useState({})

    const getData = (e) => {
        const value = e.target.value;
        const field = e.target.name;
        const newObj = { ...data }
        newObj[field] = value;
        newObj.status = 'Pending';
        newObj.email = user.email
        setData(newObj)
    }

    const [singleDoctors, setSingleDoctor] = useState([])


    useEffect(() => {
        const url = `http://localhost:5000/doctors/${ID}`
        fetch(url)
            .then(res => res.json())
            .then(data => setSingleDoctor(data))
    }, [ID])

    //get an appointment


    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('http://localhost:5000/appointments', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Appointment Getting Successfully.Please Wait for approved')
                    e.target.reset()
                }
                console.log(data)
            })
            .catch((err) => {
                console.log(err)
            }
            )
    }







    return (
        <div>
            <h2>Appointment Here</h2>

            <div>
                <Container>
                    <img src={singleDoctors?.img} alt="" />


                    <form onSubmit={handleSubmit}>

                        <TextField
                            required
                            label="Title"
                            variant="filled"
                            name='title'
                            onChange={getData}
                            defaultValue={user.displayName}
                            sx={{ width: "100%", maxWidth: "500px", my: 1 }}
                        /><br />

                        <TextField
                            required
                            label="AvailableTime"
                            variant="filled"
                            name='AvailableTime'
                            onChange={getData}
                            defaultValue={user?.email}
                            sx={{ width: "100%", maxWidth: "500px", my: 1 }}
                        /><br />

                        <TextField
                            required
                            label="Cost $"
                            variant="filled"
                            type='number'
                            name='cost'
                            onChange={getData}
                            sx={{ width: "100%", maxWidth: "500px", my: 1 }}
                        /><br />
                        <TextField
                            required
                            label=""
                            variant="filled"
                            type='date'
                            name='date'
                            onChange={getData}
                            sx={{ width: "100%", maxWidth: "500px", my: 1 }}
                        /><br />

                        <Button sx={{ py: 1, my: 2 }} type='submit' variant='outlined'>Submit</Button>

                    </form>
                </Container>
            </div>
        </div>
    );
};

export default Appointment;