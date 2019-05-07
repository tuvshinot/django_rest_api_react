import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers';

const globalInitialState = {};

const middlewares = [thunk]

const store = createStore(
    rootReducer,
    globalInitialState,
    composeWithDevTools(applyMiddleware(...middlewares))
);

export default store;
