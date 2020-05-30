import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import { createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger'
import thunk from 'redux-thunk'
import reducer from '../src/reducers/index';
import { Provider } from 'react-redux';

const store = createStore( reducer, applyMiddleware(thunk, logger ))


ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
, document.getElementById("root"));
