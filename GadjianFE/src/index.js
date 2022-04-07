import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import {createStore ,applyMiddleware} from 'redux';
import Thunk from 'redux-thunk'
import Reducers from './redux/reducers'
import {Provider} from 'react-redux'
import App from './App';

ReactDOM.render( 
  <React.StrictMode>
    <Provider store={createStore(Reducers,{},applyMiddleware(Thunk))}>{/* Combine action and reducer to create State Management */}
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals