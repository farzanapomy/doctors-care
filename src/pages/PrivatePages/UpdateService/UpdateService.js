import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Button, TextField } from '@mui/material';
import useAuth from '../../../hooks/useAuth';

const UpdateService = () => {
  const { updateId } = useParams()
  const [service, setservice] = useState({})
  const navigate = useNavigate()


  useEffect(() => {
    fetch(`https://cryptic-eyrie-03713.herokuapp.com/services/${updateId}`)
      .then(res => res.json())
      .then(data => setservice(data))
  }, [updateId])
  const { user } = useAuth()
  const [data, setData] = useState({})
  const getData = (e) => {
    const value = e.target.value;
    const field = e.target.name;
    const newObj = { ...data }
    newObj[field] = value;
    newObj.status = service.status;
    newObj.traveledBy = user?.displayName || ''
    newObj.email = user.email
    setData(newObj)
  }

  const handleUpdate = (e) => {
    e.preventDefault()
    fetch(`https://cryptic-eyrie-03713.herokuapp.com/services/${updateId}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(data)
    })
      .then(res => res.json())
      .then(data => {
        if (data.acknowledged === true) {
          navigate('/dashboard')
        }
      })
  }


  return (
    <div className='update-blog'>
      <div className="form">
        <h3 style={{ textAlign: "center" }}>Update Service: {service?.title}</h3>
        <form onSubmit={handleUpdate}>
          <TextField
            required
            label=""
            variant="filled"
            onChange={getData}
            value={data.title || service.title}
            name='title'
            sx={{ width: "100%", maxWidth: "500px", my: 1 }}
          /><br />
          <TextField
            required
            label=""
            value={data.img || service.img}
            variant="filled"
            name='img'
            onChange={getData}
            sx={{ width: "100%", maxWidth: "500px", my: 1 }}
          /><br />

          <TextField
            required
            value={data.cost || service.cost}
            label=""
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
            value={data.description || service.description}
            name='description'
            onChange={getData}
            sx={{ width: "100%", maxWidth: "500px", my: 1 }}
            multiline
            rows={4}
          /><br />
          <Button sx={{ py: 1, my: 2 }} type='submit' variant='outlined'>Submit</Button>
        </form>
      </div>
    </div>
  );
};

export default UpdateService;