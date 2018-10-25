import { combineReducers } from 'redux'
import { countReducer } from "../reducers/count"

const RootReducer = combineReducers({
    count: countReducer
})

export default RootReducer