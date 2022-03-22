import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Grid, Typography } from '@mui/material';
import { FaRegTimesCircle } from 'react-icons/fa'
import { RiEditCircleLine } from 'react-icons/ri'
import { NavLink } from 'react-router-dom';

const AllDoctors = () => {

    const [doctors, setDoctors] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/doctors')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])



    //update status
    const handleStatus = (e, id) => {
        const statusObj = { status: e.target.value }
        fetch(`http://localhost:5000/blogs/${id}`,
            {
                method: "PUT",
                headers: {
                    "content-type": "application/json"
                },
                body: JSON.stringify(statusObj)
            })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
            })
    }
    return (
        <div>
            <Typography variant='h4' sx={{ borderBottom: "2px solid #777", mb: 5 }}>Our Doctors Team</Typography>
            <Grid xs={12} md={3} className="" >

                {
                    doctors.map(service => <Grid
                        key={service._id}
                        service={service}
                    >
                        
                    </Grid>)
                }
            </Grid>
        </div>
    );
};

export default AllDoctors;