import React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import ban1 from '../../../images/ban01.jpg'
import './About.css';

const About = () => {

  return (
    <div maxwidth="sm" sx={{ flexGrow: 1, my: 1 }}>

      <Container className='about-section' >
        <Grid container spacing={2} >
          <Grid item xs={12} md={6} className='about-banner'>
            <img src={ban1} alt="" className='img-fluid' />
            <Typography>

            </Typography>
          </Grid>
          <Grid item xs={12} md={6} sx={{ lineHeight: "40px" }}>
            <Typography variant="h1" sx={{ my: 3, fontSize: 20, fontWeight: 500, color: '#b9a25f', letterSpacing: '10px' }}>
              ABOUT US
            </Typography>
            <Typography sx={{ my: 5, fontSize: 50, fontWeight: 700, fontFamily: "" }} className='about-text'>
              Since 1999, we have been providing the best quality of service to our customers.
            </Typography>

            <Typography  >
              Everything and everyone else around you can affect your self esteem. Other people can deliberately or inadvertently damage your self image. Unchecked people and circumstances can ultimately destroy your
            </Typography>
          </Grid>

        </Grid>

      </Container>
    </div>
  );
};

export default About;