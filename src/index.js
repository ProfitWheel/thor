import React from 'react';
import ReactDOM from 'react-dom';
import "./assets/css/nucleo-icons.css";
import "react-notification-alert/dist/animate.css";
import "./assets/scss/black-dashboard-pro-react.scss";
import "./assets/demo/demo.css";
import "./assets/custom.scss";
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
