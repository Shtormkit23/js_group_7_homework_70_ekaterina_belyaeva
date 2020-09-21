import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import {createStore, applyMiddleware, compose, combineReducers} from "redux";
import thunkMiddleware from 'redux-thunk';
import cartReducer from "./store/reducers/cartReducer";
import menuReducer from "./store/reducers/menuReducer";
import './index.css';
import App from './App';
import {Provider} from "react-redux";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    cart: cartReducer,
    menu: menuReducer
});

const store = createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunkMiddleware))
);

const app = (
    <Provider store={store}>
        <BrowserRouter>
            <App/>
        </BrowserRouter>
    </Provider>
);

ReactDOM.render(app, document.getElementById('root'));
