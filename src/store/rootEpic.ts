import { combineEpics } from 'redux-observable'
import { countEpic } from '../reducers/count'

const RootEpic = combineEpics(countEpic)

export default RootEpic
