import { combineEpics, Epic } from 'redux-observable'
import { delay, map, filter } from 'rxjs/operators'
import { isActionOf } from 'typesafe-actions'
import { RootState, RootAction } from '@store'
import { addCountAsync, addCount } from './action'

const epic: Epic<RootAction, RootState> = (action$, state$) => action$.pipe(
    filter(isActionOf(addCountAsync)),
    delay(1000),
    map(action => {
        console.log(action)
        return addCount(action.payload) as RootAction
    })
)

export default combineEpics(epic)