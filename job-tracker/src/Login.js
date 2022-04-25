import React, { useState } from 'react';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';
import KeyIcon from '@mui/icons-material/Key';
import TextField from '@mui/material/TextField';

const axios = require('axios');

const Login= (props) => {
  const [user, setUser] = useState({username: '', password: ''})

  const handleInput = (event) => {
    event.preventDefault()
    const target = event.target
    const name = target.name
    setUser({
      ...user,
      [name]: target.value
    })
  }
  const handleSubmit = (event) => {
    event.preventDefault()
    axios.post('https://personal-job-tracker-api.herokuapp.com/sign-in/', {
      "user": {
      "email": user.username,
      "password": user.password
      }
    })
    .then(function(res) {
      localStorage.setItem("token", res.data.user.token)
    })
    .catch(function (error) {
      console.log(error);
    });
  }
  return (
     <Container maxWidth>
      <Box component="form" onSubmit={handleSubmit}>
        <FormControl variant="standard">
        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
          <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
          <TextField value={user.username} onChange={handleInput} name="username"variant="standard" />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
          <KeyIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
          <TextField value={user.password} onChange={handleInput} name="password" variant="standard" />
        </Box>
        <Button sx={{mt: 2}} type="submit" variant="contained">Log In</Button>
        </FormControl>
      </Box>
     </Container>
  );
}

export default Login;
