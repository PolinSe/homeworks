import {UserType} from '../HW8';

type ActionType = SortActionType | CheckActionType

type SortActionType = {
    type: 'sort'
    payload: 'up' | 'down'
}
type CheckActionType = {
    type: 'check'
    payload: number
}

export const homeWorkReducer = (state: UserType[], action: ActionType): UserType[] => { // need to fix any
    switch (action.type) {
        case 'sort': {
            // need to fix
            if (action.payload === 'up')
                return [...state].sort((a, b) => a.age - b.age)
            if (action.payload === 'down')
                return [...state].sort((a, b) => b.age - a.age)
            else return state
        }
        case 'check': {
            // need to fix
            return state.filter(el => el.age >= action.payload)
        }
        default:
            return state
    }
}