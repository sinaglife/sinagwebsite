import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter } from "react-router-dom";
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import "bootstrap/dist/css/bootstrap.min.css";
import {Provider} from "react-redux"
import store from "./redux/store"
import {Elements} from '@stripe/react-stripe-js';
import {loadStripe} from '@stripe/stripe-js';

const stripePromise = loadStripe("pk_test_51IcwH9Cz57I5nxPx7a0Y9Gce66QaPSqIJknhMp0yXgDABgwpCItDAm4rR2w1WhF6NVr1Gc9yLOpSA0L0v8SJC83200lyuyLMyR");


ReactDOM.render(
  //<React.StrictMode>
  <Provider store={store}>
    <Elements stripe={stripePromise}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Elements>
  </Provider>
     
  //</React.StrictMode>
  ,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
