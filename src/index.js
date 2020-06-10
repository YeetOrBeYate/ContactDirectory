import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from "react-router-dom"
import './index.css';
import App from './App';

//Redux packages

import {Provider} from 'react-redux';
import {createStore, applyMiddleware, combineReducers} from "redux";
import thunk from "redux-thunk";

//reducers

import {RegisterReducer} from "./Reducers/Register"
import {LoginReducer} from "./Reducers/Login"
import {ContactReducer} from "./Reducers/Contacts"
import {EditReducer} from "./Reducers/Edit"

const rootReducer = combineReducers({
  Register:RegisterReducer,
  Login:LoginReducer,
  Contact:ContactReducer,
  Edit:EditReducer
})

const store = createStore(rootReducer, applyMiddleware(thunk))


ReactDOM.render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
