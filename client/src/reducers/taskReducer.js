 import{GET_TASKS,ADD_TASK,DEL_TASK,LOADING} from '../actions/types'
const Istate = {
    tasks: [],
    loading:false
  
    
}

export default (state=Istate,action)=> {
    const { type, payload } = action
    switch (type) {
        case GET_TASKS:
            return {
                ...state,
                tasks: payload,
                loading:false
               
            }
        case DEL_TASK:
            return {
                ...state,
                tasks:state.tasks.filter(task=>task._id!==payload)
            }
            case ADD_TASK:
                return {
                    ...state,
                    tasks: [...state.tasks, payload ],
                    loading:false
            }
        case LOADING:
            return {
                ...state,
                loading:true
            }
        default:
           return state
        
    }
}