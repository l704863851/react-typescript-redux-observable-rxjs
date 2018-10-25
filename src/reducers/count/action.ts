import { ActionType, createStandardAction, createAction } from 'typesafe-actions'

export const addCount = createStandardAction("count/ADD_COUNT")<number>()
export const subtractCount = createAction("count/SUBTRACT_COUNT", resolve => {
    return (count: number) => resolve(count)
})
export const addCountAsync = createStandardAction("count/COUNT_ASYNC")<number>()

export type Action = ActionType<typeof addCount | typeof subtractCount | typeof addCountAsync>