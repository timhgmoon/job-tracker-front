import React, { useState } from 'react';
import AccountCircle from '@mui/icons-material/AccountCircle';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';
import KeyIcon from '@mui/icons-material/Key';
import TextField from '@mui/material/TextField';

const axios = require('axios');
// axios.post('https://personal-job-tracker-api.herokuapp.com/sign-in/', {
//   "user": {
//   "email": "tim@gmail.com",
//   "password": "Tim1507025"
//   }
// })
// .then(function(res) {
//   console.log(res);
// })
// .catch(function (error) {
//   console.log(error);
// });
const Login= () => {
  const [user, setUser] = useState({username: '', password: ''})

  const handleInput = (event) => {
    event.preventDefault()
    const target = event.target
    const name = target.name
    setUser({
      [name]: target.value
    })
  }
  return (
     <Container maxWidth>
      <Box component="form">
        <FormControl variant="standard">
        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
          <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
          <TextField value={user.username} onChange={handleInput} name="username"variant="standard" />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
          <KeyIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
          <TextField value={user.password} onChange={handleInput} name="password" variant="standard" />
        </Box>
        <Button sx={{mt: 2}}variant="outlined">Log In</Button>
        </FormControl>
      </Box>
     </Container>
  );
}

export default Login;
