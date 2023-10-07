import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Home from './Home';
import Login from './Login';
import Register from './Register';
import { Container, Typography, AppBar, Toolbar, Button } from '@mui/material';

function App() {
  return (
    <Router>
      <div className="App">
        <AppBar position="static">
          <Toolbar>
            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
              My Portfolio Manager
            </Typography>
            <Button color="inherit">
              <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Home</Link>
            </Button>
            <Button color="inherit">
              <Link to="/login" style={{ textDecoration: 'none', color: 'white' }}>Login</Link>
            </Button>
            <Button color="inherit">
              <Link to="/register" style={{ textDecoration: 'none', color: 'white' }}>Register</Link>
            </Button>
          </Toolbar>
        </AppBar>
        <Container>
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/login" element={<Login />} />
              <Route path="/register" element={<Register />} />
            </Routes>
          </main>
        </Container>
      </div>
    </Router>
  );
}

export default App;

