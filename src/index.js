import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from './reportWebVitals';
import Index from './tugas/funtcomp/Index';
// import Indexportfolio from './tugas/portfolio/Indexportfolio';
// import Iindex from './latihan/component/reusable';
// import Formvalidator from './latihan/formAndValidator/Formvalidator';
// import Forminput from './tugas/forms/Forminput';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Index />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
