import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './store/reducers/rootReducer';
import {Provider} from 'react-redux';
import thunk from 'redux-thunk';


const store = createStore(rootReducer, applyMiddleware(thunk),);


ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
