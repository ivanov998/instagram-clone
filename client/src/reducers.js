import { combineReducers } from 'redux';

import authReducer from './services/reducers/authReducer';

const reducers = combineReducers({
    authReducer
});

export default reducers;