import axios from 'axios'
import { USER_LOADED, USER_LOADING, AUTH_ERROR, LOGIN_SUCCESS, LOGIN_FAIL, LOGOUT_SUCCESS, REGISTER_SUCCESS, REGISTER_FAIL, GET_ERRORS } from './types'
import {returnErrors} from './errorAction'

export const loadUser = () =>   (dispatch,getstate) => {
    // check token & load user
    dispatch({ type: USER_LOADING })
    // Get token from locastrogae
   

 // get the user 
    
 
    axios.get('/api/auth/user', tokenConfig(getstate))
        .then(res => {
            dispatch({
                type: USER_LOADED,
                payload:res.data
            }) 
        })
        .catch(error => {
            dispatch(returnErrors(error.response.data,error.response.status))
            dispatch({
                type: AUTH_ERROR,
               
           }) 
    })
   

    
    
}

// set up config headers and token 

export const tokenConfig = getState => {
    const token = getState().auth.token
     
    // headers
    const config = {
        headers : {
            'Content-type':"application/json"
        }
    }
    // if token add headers
    if (token) {
        config.headers['x-auth-token']=token
    }
    return config
}