import { Box, Container, Grid, Typography } from '@mui/material';
import React from 'react';
import { GoLocation } from "react-icons/go"
import { AiTwotonePhone } from "react-icons/ai"
import { BiEnvelope } from "react-icons/bi"


const Footer = () => {

    return (
        <Box style={{ backgroundColor: '#1a1a87', color: 'white', padding: '20px' }}>
            <Container sx={{ textAlign: 'left' }}>
                <Grid container sx={{ mb: 3 }} rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item sm={6} md={4} lg={4}>
                        <Typography sx={{ mb: 1, }} variant='h5'>Doctors</Typography>
                        <Typography >A physician, medical practitioner, medical doctor, or simply doctor, is a health professional who practices medicine, which is concerned with promoting.</Typography>
                    </Grid>
                    <Grid item sm={6} md={4} lg={4}>
                        <Typography variant='h5'>Contact</Typography>
                        <ul>
                            <li style={{ margin: "10px 0px" }}><BiEnvelope style={{ marginRight: "5px" }} />
                                doctors@gmail.com
                            </li>
                            <li style={{ margin: "10px 0px" }}><AiTwotonePhone style={{ marginRight: "5px" }} />+44 05050505</li>
                            <li style={{ margin: "10px 0px" }}><GoLocation style={{ marginRight: "5px" }} />
                                Los Angeles, California
                            </li>
                        </ul>
                    </Grid>

                    <Grid item sm={6} md={4} lg={4}>
                        <Typography variant='h5'>Important Links</Typography>
                        <ul style={{ textAlign: 'left', marginLeft: 8, textDecoration: 'none' }}>
                            <li style={{ margin: "10px 0px", }}><a style={{ textAlign: 'left', color: "white", textDecoration: 'none' }} href="/">About</a></li>
                            <li style={{ margin: "10px 0px" }}><a style={{ color: "white", textDecoration: 'none' }} href="/">Privacy & Policy</a></li>
                            <li style={{ margin: "10px 0px" }}><a style={{ color: "white", textDecoration: 'none' }} href="/">Service</a>
                            </li>
                            <li style={{ margin: "10px 0px" }}><a style={{ color: "white", textDecoration: 'none' }} href="/">Terms</a>
                            </li>
                        </ul>
                    </Grid>

                </Grid>
                <div style={{ textAlign: "center", margin: "20px 0px" }}>
                    <Typography variant='p'>Copyright by Doctors</Typography>
                </div>
            </Container>
        </Box>
    );
};

export default Footer;

