import { GET_ERRORS,CLEAR_ERRORS} from '../actions/types'
 const Istate = {
     msg: {},
     status: null,
     id:null
}

export default function(state = Istate, action){
    const {type,payload}=action
    switch (type) {
        case GET_ERRORS:
            return {
                ...state,
                msg: payload.msg,
                id:payload.id
            }
        case CLEAR_ERRORS:
            return {
                ...state,
                msg: null,
                id:null
            }
        default:
            return state
    }
}