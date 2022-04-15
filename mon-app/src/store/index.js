import {applyMiddleware, combineReducers, createStore} from 'redux'
import { filterReducer } from './filterReducer'
import { todoReducer } from './todoReducer'
import {composeWithDevTools} from 'redux-devtools-extension'
import thunk from 'redux-thunk'


const store = createStore (
    combineReducers({
        todos: todoReducer,
        filter: filterReducer
    }),
    composeWithDevTools(
        applyMiddleware(thunk),
    )
   )


export default store