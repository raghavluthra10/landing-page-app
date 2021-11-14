import React from 'react';
import './Navbar.scss';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Stack } from '@mui/material';
// import { createTheme, ThemeProvider } from '@mui/material/styles';



const Navbar = () => {

    const authenticateUser = () => {
        console.log('auth user')
    };

    return (

        <Box sx={{ flexGrow: 1 }}>

                <AppBar className="d-flex " >

                    <Toolbar>

                        <IconButton
                            className="d-none"
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            sx={{ mr: 2 }}
                        >
                            <MenuIcon />
                        </IconButton>

                        <Stack  direction="row" spacing={10}  className="flex-grow-1 align-self-center" >
                            <Typography variant="subtitle2" component="div" >
                                Home
                            </Typography>
                            <Typography variant="subtitle2" component="div" >
                                Dashboard
                            </Typography>
                            <Typography variant="subtitle2" component="div" >
                                About us
                            </Typography>
                            <Typography variant="subtitle2" component="div" >
                                Contact us
                            </Typography>
                        </Stack>
                        
                        
                        <Button onClick={authenticateUser} 
                            className="secondaryBackgroundColor outlinePrimary secondaryFontColor" >
                                Login
                        </Button>

                    </Toolbar>

                </AppBar>
            </Box>


    )
}

export default Navbar
