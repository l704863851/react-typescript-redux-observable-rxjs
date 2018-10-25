import { createStore, applyMiddleware  } from 'redux'
import { createEpicMiddleware } from 'redux-observable';
import RootReducer from './rootReducer'
import RootEpic from './rootEpic'
import { RootAction } from './rootAction'

const epicMiddleware = createEpicMiddleware();

const store = createStore(RootReducer, applyMiddleware(epicMiddleware))

epicMiddleware.run(RootEpic as RootAction)

export { RootState } from './rootState'
export { RootAction }
export default store
