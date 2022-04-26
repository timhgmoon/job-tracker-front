import Grid from '@mui/material/Grid'
const HomePage = (props) => {
  return (
    <Grid 
      container  
      direction="row"
      justifyContent="center"
      alignItems="center" 
      spacing={{xs: 2}} 
    >
      <Grid item sm={2} >
        <Grid 
          container
          direction="column"
        >
          <Grid item sx={{p:2}}>
            Interested
          </Grid>
          <Grid item sx={{p:1}}>
            Interested test
          </Grid>
        </Grid>
      </Grid>
      <Grid item sm={2} >
        <Grid 
            container
            direction="column"
          >
            <Grid item sx={{p:2}}>
              Applied
            </Grid>
            <Grid item sx={{p:1}}>
              applied test
            </Grid>
        </Grid>
      </Grid>
      <Grid item sm={2} >
        <Grid 
            container
            direction="column"
          >
            <Grid item sx={{p:2}}>
              Interviewing
            </Grid>
            <Grid item sx={{p:1}}>
              interviewing test
            </Grid>
        </Grid>
      </Grid>
      <Grid item sm={2} >
        <Grid 
            container
            direction="column"
          >
            <Grid item sx={{p:2}}>
              Accepted
            </Grid>
            <Grid item sx={{p:1}}>
              accepted test
            </Grid>
        </Grid>
      </Grid>
      <Grid item sm={2} >
        <Grid 
            container
            direction="column"
          >
            <Grid item sx={{p:2}}>
              Rejected
            </Grid>
            <Grid item sx={{p:1}}>
              reject test
            </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default HomePage;
