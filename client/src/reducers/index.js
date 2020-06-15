import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import { errorReducer } from './errorReducer';


const rootReducer = combineReducers({
    error: errorReducer,
    auth: authReducer,
});
export default rootReducer;
