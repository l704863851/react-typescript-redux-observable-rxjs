import { RouterAction, LocationChangeAction } from 'react-router-redux';
import { countAction } from '../reducers/count'

type ReactRouterAction = RouterAction | LocationChangeAction

export type RootAction = ReactRouterAction | countAction
