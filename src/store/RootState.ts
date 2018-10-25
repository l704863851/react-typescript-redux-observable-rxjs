import { StateType } from 'typesafe-actions'
import RootReducer from './rootReducer'

export type RootState = StateType<typeof RootReducer>