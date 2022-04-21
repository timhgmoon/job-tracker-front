const axios = require('axios');
axios.post('https://personal-job-tracker-api.herokuapp.com/sign-in/', {
  "user": {
  "email": "tim@gmail.com",
  "password": "Tim1507025"
  }
})
.then(function(res) {
  console.log(res);
})
.catch(function (error) {
  console.log(error);
});
const Login = () => {
  return (
     <h1>Login</h1>
  );
}

export default Login;
