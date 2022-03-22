import { TextField, Button, Typography } from '@mui/material';
import React, { useState } from 'react';

const MakeAdmin = () => {
  const [email, setEmail] = useState('')
  const handleAdmin = (e) => {
    const emailObj = { email }
    e.preventDefault()
    fetch('http://localhost:5000/users/admin', {
      method: "PUT",
      headers: {
        "content-type": "application/json"
      },
      body: JSON.stringify(emailObj)
    })
      .then(res => res.json())
      .then(data => {
        if (data.acknowledged === true) {
          alert('Admin made successfully!!')
          e.target.reset()
        }
      })
  }

  
  return (
    <div>
      <form onSubmit={handleAdmin}>
        <Typography variant='h4'>Make Admin</Typography>
        <TextField
          required
          label="Email"
          variant="filled"
          type='email'
          onChange={(e) => setEmail(e.target.value)}
          sx={{ width: "100%", maxWidth: "500px", my: 1 }}
        /><br />
        <Button sx={{ py: 1, mt: 2 }} type='submit' variant='outlined'>Make Admin</Button>
      </form>
    </div>
  );
};

export default MakeAdmin;