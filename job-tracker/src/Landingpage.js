import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Grid';
import Item from '@mui/material/ListItem';

const LandingPage = () => {
  return (
    <>
    <Grid 
      container 
      spacing={2}
      direction="column"
      alignItems="center"
      sx={{
        height: '100%'
      }}
    >
      <Grid item xs={12}>
        <Item>Welcome to Job Tracker</Item>
      </Grid>
      <Grid item xs={12}>
        <Item centered>Make your life easier tracking previous/current job applications!</Item>
      </Grid>
    </Grid>
    <Grid 
      container 
      direction="row"
      justifyContent="center"
      alignItems="center"
      spacing={2}>
      <Grid item direction="row" alignItems="center" justifyContent="center" xs={12} sm={4}>
        <Item>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut eleifend nisi. Donec velit odio, dignissim vel luctus sed, sagittis a nisi. Nam sollicitudin, tortor eu ultrices feugiat, elit justo maximus nibh, ut iaculis lectus nulla a eros. Donec augue enim, varius eget dapibus nec, eleifend at dui. Vivamus commodo odio at vestibulum lobortis. Quisque pretium ornare purus vitae consequat. Vestibulum cursus, leo in venenatis sollicitudin, est nibh gravida tortor, vitae mollis elit diam a diam.</Item>
        <Grid container justifyContent="center"><Button>Get Started</Button></Grid>
      </Grid>
      <Grid item xs={4}>
        <img src="https://via.placeholder.com/450" alt="placeholder"></img>
      </Grid>
    </Grid>
    </>
  );
}

export default LandingPage;
