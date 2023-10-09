import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';

const Header = () => {
  // Replace this with your actual authentication state
  const isAuthenticated = false;

  return (
    //<AppBar position="static" style={{ backgroundColor: 'darkgrey' }}>
    <AppBar position="static" style={{ backgroundColor: '#333333' }}>

      <Toolbar>
        <Typography variant="h6">
          RPR Portfolio Manager
        </Typography>
        <div style={{ flexGrow: 1 }}></div>
        <Button color="inherit">
          <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Home</Link>
        </Button>
        {isAuthenticated ? (
          <Button color="inherit">
            <Link to="/logout" style={{ textDecoration: 'none', color: 'white' }}>Logout</Link>
          </Button>
        ) : (
          <Button color="inherit">
            <Link to="/login" style={{ textDecoration: 'none', color: 'white' }}>Login</Link>
          </Button>
        )}
        <Avatar alt="User Avatar" src="/static/images/avatar/1.jpg" />
      </Toolbar>
    </AppBar>
  );
};

export default Header;
