import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { ThemeProvider } from '@mui/material/styles';  // Add this line
import theme from './theme';  // Add this line, make sure the path is correct

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>  {/* Add this line */}
      <App />
    </ThemeProvider>  {/* Add this line */}
  </React.StrictMode>
);

reportWebVitals();
