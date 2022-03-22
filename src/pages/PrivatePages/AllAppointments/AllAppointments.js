import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Typography } from '@mui/material';
import { FaRegTimesCircle } from 'react-icons/fa'
import { RiEditCircleLine } from 'react-icons/ri'
import { NavLink } from 'react-router-dom';

const AllAppointments = () => {
    const [appointments, setAppointments] = useState([])
    useEffect(() => {
        fetch('https://cryptic-eyrie-03713.herokuapp.com/appointments')
            .then(res => res.json())
            .then(data => setAppointments(data))
    }, [])


    const handleDelete = (id) => {
        const makeSure = window.confirm('Are you sure to want to delete this blog?')
        if (makeSure) {
            fetch(`https://cryptic-eyrie-03713.herokuapp.com/appointments/${id}`, {
                method: "DELETE"
            })
                .then(res => res.json())
                .then(data => {
                    if (data.acknowledged === true) {
                        const rest = appointments.filter(blog => blog._id !== id)
                        setAppointments(rest)
                    }
                })
        }
    }



    //update status
    const handleStatus = (e, id) => {
        const statusObj = { status: e.target.value }
        fetch(`https://cryptic-eyrie-03713.herokuapp.com/appointments/${id}`, {
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
            <Typography variant='h4' sx={{ mb: 5 }}>All Appointments</Typography>
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell sx={{ fontSize: "20px", fontWeight: "500" }} align="center">Date</TableCell>
                            <TableCell sx={{ fontSize: "20px", fontWeight: "500" }} align="center">Cost</TableCell>
                            <TableCell sx={{ fontSize: "20px", fontWeight: "500" }} align="center">Status</TableCell>
                            <TableCell sx={{ fontSize: "20px", fontWeight: "500" }} align="center">Action</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {appointments?.map((appointment) => (
                            <TableRow
                                key={appointment._id}
                            >

                                <TableCell align="center">{appointment.date}</TableCell>
                                <TableCell align="center">{appointment.cost}</TableCell>
                                <TableCell align="center">
                                    <select onChange={(e) => handleStatus(e, appointment._id)} className='selectOption'>
                                        <option value={appointment.status}>{appointment.status}</option>
                                        <option value="Approved">Approved</option>
                                    </select>
                                </TableCell>
                                <TableCell align="center">
                                    <FaRegTimesCircle onClick={() => handleDelete(appointment._id)} style={{ fontSize: "22px", cursor: "pointer", color: "red" }} />

                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </div>
    );
};


export default AllAppointments;