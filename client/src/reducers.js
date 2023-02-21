import { combineReducers } from 'redux';

import loginReducer from './services/reducers/loginReducer';

const reducers = combineReducers({
    loginReducer
});

export default reducers;