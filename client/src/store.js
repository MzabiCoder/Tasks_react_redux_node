import { createStore, applyMiddleware } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import thunk from 'redux-thunk'
import rootReducer from './reducers'

const Istate = {}
const middleware = [thunk]

const store = createStore(rootReducer, Istate, composeWithDevTools(applyMiddleware(...middleware)))

export default store