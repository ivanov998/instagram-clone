import { combineReducers } from 'redux';

import authReducer from './services/reducers/authReducer';
import userReducer from './services/reducers/userReducer';

const reducers = combineReducers({
    auth: authReducer,
    user: userReducer
});

export default reducers;