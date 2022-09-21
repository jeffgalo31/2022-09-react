import  { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// import {App} from './App';
import reportWebVitals from './reportWebVitals';
import { Parent } from './Parent';
import { HomeWorkForm } from './HomeWorkForm';
import { MyClassComponent } from './MyClassComponent';
import { Component1 } from './Component1';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    {/* <App /> */}
    <Component1 />
  </StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
