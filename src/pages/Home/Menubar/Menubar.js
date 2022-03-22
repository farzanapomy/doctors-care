import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import { makeStyles } from '@mui/styles';
import { Button, Container, Drawer, ListItemText, useTheme } from '@mui/material';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';

import { useEffect, useState } from 'react';
import useAuth from '../../../hooks/useAuth';


const Menubar = () => {
    const { user, singOutUser } = useAuth()
    const theme = useTheme();
    const useStyle = makeStyles({
        navIcon: {
            [theme.breakpoints.up('sm')]: {
                display: 'none !important'
            },
            navLogo: {
                [theme.breakpoints.down('sm')]: {
                    display: 'none '
                },
            },

        }
    })

    const { navItem, navIcon, navLogo } = useStyle();
    const [state, setState] = useState(false);



    const list = (
        <Box
            sx={{ width: 250 }}
            role="presentation"
        >
            <List>

                <ListItem button >
                    <ListItemText>
                        <Link style={{ color: 'black', paddingRight: '10px', textDecoration: 'none' }} to='/home'>Home</Link>
                    </ListItemText>
                </ListItem>
                <ListItem button >
                    <ListItemText>
                        <Link style={{ color: 'black', paddingRight: '10px', textDecoration: 'none' }} to='/projects'>Projects</Link>
                    </ListItemText>
                </ListItem>
                <ListItem button >
                    <ListItemText>
                        <Link style={{ color: 'black', paddingRight: '10px', textDecoration: 'none' }} to='/contactMe'>Contact Me</Link>
                    </ListItemText>
                </ListItem>
                <ListItem button >
                    <ListItemText>
                        <Link style={{ color: 'black', paddingRight: '10px', textDecoration: 'none' }} to='/about'>About me </Link>
                    </ListItemText>
                </ListItem>

            </List>
            <Divider />

        </Box>
    );


    return (
        <div >
            <AppBar position="static" sx={{ backgroundColor: '#191970' }} >
                <Container>
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                            className={navIcon}
                            onClick={() => setState(true)}
                        >
                            <MenuIcon />
                        </IconButton>

                        <Link className={navItem} to='/home' style={{ paddingRight: '10px', textDecoration: 'none' }}>
                            <Typography className={navLogo} variant="h6" component="div" sx={{ flexGrow: 1, color: 'white' }}>
                                Doctors Health
                            </Typography>
                        </Link>



                        <Box sx={{ mx: 'auto', }}>
                            <Box sx={{ display: { xs: 'none', md: 'flex', justifyContent: 'left', } }}>

                                <Link className={navItem} to='/doctors' style={{ paddingRight: '10px', textDecoration: 'none', color: 'white', }}>
                                    Our Doctors
                                </Link>

                                <Link className={navItem} to='/Departments' style={{ color: 'white', paddingRight: '10px', textDecoration: 'none' }}>
                                    All Departments
                                </Link>
                                <Link className={navItem} to='/TestLab' style={{ color: 'white', paddingRight: '10px', textDecoration: 'none' }}>
                                    Labs
                                </Link>
                                <Link className={navItem} to='about' style={{ color: 'white', paddingRight: '10px', textDecoration: 'none' }}>
                                    About US
                                </Link>

                                {
                                    user.email ?
                                        <div style={{ display: "flex", }}>
                                            <Link style={{ color: 'white', textDecoration: 'none' }} variant='outlined' to='/' onClick={singOutUser}>Log Out
                                                <span style={{ color: 'gray', fontWeight: 900, padding: '0px 15px' }}>{" "}Hello {user.displayName}</span></Link>
                                            <Link style={{ color: 'white', textDecoration: 'none' }} variant='outlined' to='/dashboard' >Dashboard
                                            </Link>

                                        </div> :
                                        <Link className={navItem} to='login' style={{ color: 'white', paddingRight: '10px', textDecoration: 'none' }}>
                                            Login
                                        </Link>
                                }
                            </Box>
                        </Box>

                    </Toolbar>
                </Container>
            </AppBar>

            <div>
                {/* 
                <React.Fragment >
                    <Drawer

                        open={state}
                        onClose={() => setState(false)}
                    >
                        {list}
                    </Drawer>
                </React.Fragment> */}

            </div>
        </div >
    );
}

export default Menubar;