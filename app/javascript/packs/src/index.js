import React from 'react'
import { render } from 'react-dom'
import { createStore, applyMiddleware} from 'redux'
import rootReducer from './reducers'
import loadData from '../middleware/loadData'
import thunk from 'redux-thunk';
import {routerMiddleware} from 'react-router-redux';
import {composeWithDevTools} from 'redux-devtools-extension';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const enhancer = composeEnhancers(
    applyMiddleware(...middleware),
    // other store enhancers if any
);

export const store = createStore(rootReducer,
    composeWithDevTools(
        applyMiddleware(loadData),
        applyMiddleware(thunk),
        applyMiddleware(reactRouterMiddleware),

    ));
 //pass the reducer and initial state

store.subscribe(() => {
	// we can listen to the store change
	console.log("store changed", store.getState())
})

