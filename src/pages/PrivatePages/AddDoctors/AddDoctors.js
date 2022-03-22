import { Button, TextField, Typography } from '@mui/material';
import React, { useState } from 'react';
import useAuth from '../../../hooks/useAuth';
import axios from 'axios';


const AddDoctors = () => {
    const { user } = useAuth()
    const [data, setData] = useState({})
    const getData = (e) => {
        const value = e.target.value;
        const field = e.target.name;
        const newObj = { ...data }
        newObj[field] = value;
        newObj.email = user.email
        setData(newObj)
    }



    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post('https://cryptic-eyrie-03713.herokuapp.com/doctors', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Doctor Added Successfully')
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
            <Typography variant='h5' sx={{ mb: 5 }}>Add Doctors</Typography>
            <form onSubmit={handleSubmit}>
                <TextField
                    required
                    label="Title"
                    variant="filled"
                    name='title'
                    onChange={getData}
                    sx={{ width: "100%", maxWidth: "500px", my: 1 }}
                /><br />

                <TextField
                    required
                    label="Img URL"
                    variant="filled"
                    name='img'
                    onChange={getData}
                    sx={{ width: "100%", maxWidth: "500px", my: 1 }}
                /><br />

                <TextField
                    required
                    label=""
                    variant="filled"
                    type='time'
                    name='AvailableTime'
                    onChange={getData}
                    sx={{ width: "100%", maxWidth: "500px", my: 1 }}
                /><br />
                <TextField
                    required
                    label="Description"
                    variant="filled"
                    name='description'
                    onChange={getData}
                    sx={{ width: "100%", maxWidth: "500px", my: 1 }}
                    multiline
                    rows={4}
                /><br />
                <Button sx={{ py: 1, my: 2 }} type='submit' variant='outlined'>Submit</Button>
            </form>
        </div>
    );
};

export default AddDoctors;