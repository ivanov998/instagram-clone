import { combineReducers } from 'redux';

import loginReducer from './services/reducers/loginReducer';
import registerReducer from './services/reducers/registerReducer';

const reducers = combineReducers({
    loginReducer,
    registerReducer
});

export default reducers;