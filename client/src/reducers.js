import { combineReducers } from 'redux';

import authReducer from './services/reducers/authReducer';
import userReducer from './services/reducers/userReducer';

const reducers = combineReducers({
    authReducer,
    userReducer
});

export default reducers;