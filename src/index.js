import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import counter from './reducer';
import App from './App';
import './index.css';

var destination = document.querySelector("#container");

// Initialize Redux Store
// Pass in a reducer for the createStore method's argument
var store = createStore(counter);

// Once creating store, provide it as a prop to the Provider component
// Provider component will ensure every component has access to the Redux store and functionality
ReactDOM.render(
    <Provider store={store}>
    <App/>
    </Provider>,
    destination
);