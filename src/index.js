import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

import HelloWorld from "./helloWorld/HelloWorld";
import TextField from "./Forms/TextField";
//import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <HelloWorld lastName='JAMAOUI' />
      <TextField inputName='firstName' inputLabel='firstname' >
          Veuillez saisir votre prénom.
      </TextField>
      <TextField inputName='lastName' inputLabel='last name'>
          et, conseLorem ipsum dolor sit amctetur adipisicing elit. Consectetur deserunt dignissimos ea facilis libero, molestias nam nulla quia quis? Aliquam aperiam aspernatur laborum nam saepe!
      </TextField>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
