import { GET_TASKS, ADD_TASK, DEL_TASK, LOADING } from './types'
import axios from 'axios'

export const setLoading = () => {
    return {
        type:LOADING
    }
}

export const getTasks = () => async dispatch => {
    dispatch(setLoading())
    const res = await axios.get('/api/tasks')
    dispatch({
        type: GET_TASKS,
        payload:res.data
    })
}

export const delTask = id => async dispatch => {
   
    await axios.delete(`/api/tasks/${id}`)
    dispatch({
        type: DEL_TASK,
        payload:id
    })
}

export const addTask = task => async dispatch => {
   
    const res= await axios.post('/api/tasks', task)
        dispatch({
            type: ADD_TASK,
            payload:res.data
    })
}

