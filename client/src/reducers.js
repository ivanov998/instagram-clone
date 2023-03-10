import { combineReducers } from 'redux';

import authReducer from './services/reducers/authReducer';
import userReducer from './services/reducers/userReducer';
import postReducer from './services/reducers/postReducer';

const reducers = combineReducers({
    auth: authReducer,
    user: userReducer,
    post: postReducer
});

export default reducers;