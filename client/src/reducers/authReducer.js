import {USER_LOADED,USER_LOADING,AUTH_ERROR,LOGIN_SUCCESS,LOGIN_FAIL,LOGOUT_FAIL,LOGOUT_SUCCESS,REGISTER_SUCCESS,REGISTER_FAIL} from '../actions/types'
const Istate = {
    token: localStorage.getItem('token'),
    isAuthenticated: null,
    isLoading: false,
    user:null
}

export default function (state=Istate,action) {
    const { type, payload } = action
    switch (type) {
        case USER_LOADING:
            return {
                ...state,
                isLoading:true
            }
        case USER_LOADED:
            return {
                ...state,
                isAuthenticated: true,
                isLoading:false,
                user:payload
            }
        case LOGIN_SUCCESS:
        case REGISTER_SUCCESS:
     
            return {
                ...state,
                ...payload,
                isAuthenticated: true,
                isLoading:false,
            }
        case AUTH_ERROR:
        case LOGIN_FAIL:
        case LOGOUT_SUCCESS:
        case REGISTER_FAIL:
        localStorage.removeItem('token')
            return {
                ...state,
               // token:localStorage.removeItem('token'),
                token: null,
                user: null,
                isAuthenticated: false,
                isLoading:false
            }
        default:
            return state
    }
}