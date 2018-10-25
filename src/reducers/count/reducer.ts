import { getType } from 'typesafe-actions'
import { addCount, subtractCount, Action } from './action'

type State = Readonly<number>

export const reducer = (state: State = 0, action: Action) => {
    switch(action.type) {
        case getType(addCount): 
            return state + action.payload;
        case getType(subtractCount):
            return state - action.payload;
        default: return state
    }
}
