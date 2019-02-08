import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';


import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import {composeWithDevTools} from 'redux-devtools-extension';
import logger from 'redux-logger';
import {BrowserRouter as Router, Route, NavLink} from "react-router-dom";
import thunk from 'redux-thunk';


ReactDOM.render(<App/>, 	document.getElementById('root'));


