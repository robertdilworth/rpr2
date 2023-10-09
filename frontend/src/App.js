import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './Home';
import Register from './Register';
import { Container } from '@mui/material';
import Header from './Header';
import Pricing from './Pricing';  // Import the Pricing component
import SignIn from './SignIn';  // Import the SignIn component
import SignUp from './SignUp';  // Make sure the path is correct


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Container>
          <main>
            <Routes>
              <Route path="/" element={<Pricing />} />  {/* Display Pricing template by default */}
              <Route path="/home" element={<Home />} />  {/* Moved Home to /home */}
              <Route path="/login" element={<SignIn />} />  {/* Display Sign-In template on /login */}
              <Route path="/register" element={<Register />} />
              <Route path="/signup" element={<SignUp />} />
              {/* Add more routes here */}
            </Routes>
          </main>
        </Container>
      </div>
    </Router>
  );
}

export default App;
