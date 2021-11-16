import React from 'react';
import './Navbar.scss';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';



const Navbar = () => {

    const authenticateUser = () => {
        console.log('auth user')
    };

    return (

        <nav className='secondaryBackgroundColor px-4 navbar ' >
            <IconButton className="d-none navbar_menuIcon"  >  
                <MenuIcon />
            </IconButton>

            <div className='flex-grow-1  navbar_pages_container'  >
                <div className="navbar_pages d-flex justify-content-between "  >
                    <Link to='/' className="secondaryFontColor" >
                        Home
                    </Link>
                
                    <Link to='/dashboard' className="secondaryFontColor" >
                        Dashboard
                    </Link>
               
                    <Link to='/aboutus'  className="secondaryFontColor" >  
                        About us
                    </Link>
                
                    <Link to='/contactus'  className="secondaryFontColor" >
                        Contact
                    </Link>
                </div>
            </div>

            <Button variant='outlined' className="authButton" onClick={authenticateUser} >Login</Button>
        </nav>

    )
}

export default Navbar
