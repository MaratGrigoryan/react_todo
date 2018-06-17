import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { combineReducers, createStore } from 'redux';
import { rootReducers }  from './reducers/index.js';
import App from './App';
import index from './style/index.css'

const store = createStore(rootReducers);


ReactDOM.render(
    <Provider store = {store}>
        <App />
    </Provider>,    
    document.getElementById('root')
    );
