import { createStore, applyMiddleware } from 'redux';
import rootReducer from './rootReducers';
import { composeWithDevTools } from '@redux-devtools/extension';
import { thunk } from 'redux-thunk';

// (process.env.NODE_ENV === "development" && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose
const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));

export default store;