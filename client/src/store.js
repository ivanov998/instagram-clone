import { configureStore, compose, applyMiddleware} from '@reduxjs/toolkit';

import thunk from 'redux-thunk';
import reducers from './reducers';


const composeEnhancers =
  process.env.NODE_ENV !== 'production' &&
  typeof window === 'object' &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
    : compose;

const store = configureStore({
    reducer: reducers, 
    middleware: [thunk]
});

export default store;