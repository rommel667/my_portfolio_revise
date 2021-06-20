import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import ThemeProvider from './components/Theme';


ReactDOM.render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
  ,
  document.getElementById('root')
);


reportWebVitals();
