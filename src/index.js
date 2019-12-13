import React from 'react';
import ReactDOM from 'react-dom';
// import './index.css';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import axios from 'axios';
import reducers from './reducers/';
import { Provider } from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import createSagaMidleware from 'redux-saga';
import rootSaga from './sagas';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://rem-rest-api.herokuapp.com/api';
// axios.defaults.baseURL = 'https://cors-anywhere.herokuapp.com/https://rem.dbwebb.se/api';

const sagaMidleware = createSagaMidleware();

const store = createStore(reducers, applyMiddleware(sagaMidleware));

sagaMidleware.run(rootSaga);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
