import AccountCircle from '@mui/icons-material/AccountCircle';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import FormControl from '@mui/material/FormControl';
import Input from '@mui/material/Input';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import KeyIcon from '@mui/icons-material/Key';
import TextField from '@mui/material/TextField';

const axios = require('axios');
// axios.post('https://personal-job-tracker-api.herokuapp.com/sign-up/', {
//   "user": {
//   "email": "tim1@gmail.com",
//   "password": "Tim1507025"
//   }
// })
// .then(function(res) {
//   console.log(res);
// })
// .catch(function (error) {
//   console.log(error);
// });
const Signup = () => {
  return (
     <Container maxWidth>
      <Box>
        <FormControl variant="standard">
        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
          <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
          <TextField id="input-with-sx" label="Username" variant="standard" />
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
          <KeyIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
          <TextField id="input-with-sx" label="Password" variant="standard" />
        </Box>
        <Button sx={{mt: 2}}variant="outlined">Sign Up</Button>
        </FormControl>
      </Box>
     </Container>
  );
}

export default Signup;
