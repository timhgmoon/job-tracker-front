import Card from '@mui/material/Card'
import Grid from '@mui/material/Grid'

const axios = require('axios')

const HomePage = (props) => {
  const api = "https://personal-job-tracker-api.herokuapp.com/jobs/"

  axios.get(api, { headers: {"Authorization": `Token ${props.token}`} })
  .then(res => {
    console.log(res.data)
  })
  .catch(error => {
    console.log(error)
  });

  return (
    <Grid 
      container  
      direction="row"
      justifyContent="center"
      spacing={{s: 2}} 
      sx={{height: '100vh'}}
      
    >
      <Grid item sm={2} sx={{borderLeft: 1}}>
        <Grid 
          container
          direction="column"
        >
          <Grid item sx={{p: 2, borderBottom: 1}} align="center">
            Interested
          </Grid>
          <Grid item sx={{p: 1}}>
            Interested test
          </Grid>
          <Grid item sx={{p: 1}}>
            sdfdsfdsfds
          </Grid>
        </Grid>
      </Grid>
      <Grid item sm={2} sx={{borderLeft: 1}}>
        <Grid 
            container
            direction="column"
          >
            <Grid item sx={{p: 2, borderBottom: 1}} align="center">
              Applied
            </Grid>
            <Grid item sx={{p: 1}}>
              applied test
            </Grid>
        </Grid>
      </Grid>
      <Grid item sm={2} sx={{borderLeft: 1}}>
        <Grid 
            container
            direction="column"
          >
            <Grid item sx={{p: 2, borderBottom: 1}} align="center">
              Interviewing
            </Grid>
            <Grid item sx={{p:1}}>
              interviewing test
            </Grid>
        </Grid>
      </Grid>
      <Grid item sm={2} sx={{borderLeft: 1}}>
        <Grid 
            container
            direction="column"
          >
            <Grid item sx={{p: 2, borderBottom: 1}} align="center">
              Offer
            </Grid>
            {/* <Grid item sx={{p:1}}>
              Offer test
            </Grid> */}
            <Card variant="outlined" sx={{p: 2}}>Twitter</Card>
            <Card variant="outlined" sx={{p: 2}}>Facebook</Card>
            <Card variant="outlined" sx={{p: 2}}>Carter Subaru</Card>
            
        </Grid>
      </Grid>
      <Grid item sm={2} sx={{borderLeft: 1}} > 
        <Grid 
            container
            direction="column"
          >
            <Grid item sx={{p: 2, borderBottom: 1}} align="center" >
              Accepted
            </Grid>
            <Grid item sx={{p: 1}}>
              accepted test
            </Grid>
        </Grid>
      </Grid>
      <Grid item sm={2} sx={{borderRight: 1, borderLeft: 1}}>
        <Grid 
            container
            direction="column"
          >
            <Grid item sx={{p: 2, borderBottom: 1}} align="center" >
              Rejected
            </Grid>
            <Grid item sx={{p: 1}}>
              reject test
            </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default HomePage;
