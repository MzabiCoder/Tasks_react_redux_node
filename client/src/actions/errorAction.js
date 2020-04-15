import { GET_ERRORS, CLEAR_ERRORS } from './types'

// return errros

export const returnErrors = (msg, status, id = null) => {
    return {
        type: GET_ERRORS,
        payload:{msg,status,id}
    }
}

export const clearErros = () => {
    return {
        type: CLEAR_ERRORS
    }
}
