import { combineReducers } from 'redux'
import taskReducer from './taskReducer'
import authReducer from './authReducer'
import erroReducer from './erroReducer'
export default combineReducers({
    task: taskReducer,
    error: erroReducer,
    auth:authReducer
})