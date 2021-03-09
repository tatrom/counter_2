import {Dispatch} from "redux";

let initialState = {
    counter: 0,
    mode: true,
    minValue: '1',
    maxValue: '10',
}

export type InitialStateType = typeof initialState

export const CounterReducer = (state: InitialStateType = initialState, action: CounterReducerType): InitialStateType => {
    switch (action.type) {
        case 'CHANGE-MAX-VALUE': {
            return {...state, maxValue: action.newMax}
        }
        case 'CHANGE-MIN-VALUE':
            return {...state, minValue: action.newMin}
        case 'INC-COUNTER':
            return {...state, counter: state.counter += 1}
        case 'RESET-COUNTER':
            return {...state, counter: parseInt(state.minValue)}
        case 'CHANGE-MODE':
            return {...state, mode: !state.mode}
        case 'CHANGE-COUNTER-TO-MIN':
            return {...state, counter: parseInt(state.minValue)}
        default:
            return {...state}
    }
}

export type CounterReducerType = ChangeMaxValueActionType
    | ChangeMinValueActionType
    | IncCounterActionType
    | ResetCounterActionType
    | ChangeModeActionType
    | ChangeCounterToMinActionType

export type ChangeMaxValueActionType = ReturnType<typeof SetMaxValue>
export type ChangeMinValueActionType = ReturnType<typeof SetMinValue>
export type IncCounterActionType = ReturnType<typeof IncCounter>
export type ResetCounterActionType = ReturnType<typeof ResetCounter>
export type ChangeModeActionType = ReturnType<typeof ChangeMode>
export type ChangeCounterToMinActionType = ReturnType<typeof ChangeCounterToMin>
export const SetMaxValue = (newMax: string) => ({
    type: 'CHANGE-MAX-VALUE',
    newMax
} as const)

export const SetMinValue = (newMin: string) => ({
    type: "CHANGE-MIN-VALUE",
    newMin
} as const)

export const IncCounter = () => ({
    type: "INC-COUNTER"
} as const)

export const ResetCounter = () => ({
    type: 'RESET-COUNTER'
} as const)

export const ChangeMode = () => ({
    type: 'CHANGE-MODE'
} as const)

export const ChangeCounterToMin = () => ({
    type: 'CHANGE-COUNTER-TO-MIN'
} as const)
export const ChangeMaxValueTC = (newValue: string) => (dispatch: Dispatch) => {

    dispatch(SetMaxValue(newValue))
    localStorage.setItem('maxValue', newValue.toString())

}

export const ChangeMinValueTC = (newValue: string) => (dispatch: Dispatch) => {

    dispatch(SetMinValue(newValue))
    localStorage.setItem('minValue', newValue.toString())
}

export const ChangeModeTC = (minValue: string, maxValue: string) => (dispatch: Dispatch) => {
    dispatch(ChangeMode())
    dispatch(ChangeCounterToMin())
    localStorage.setItem('minValue', minValue.toString())
    localStorage.setItem('maxValue', maxValue.toString())
}

export const SetMinAndMaxTC = () => (dispatch: Dispatch) => {
    let minimum = localStorage.getItem('minValue')
    let newMinimum = '1'
    let maximum = localStorage.getItem('maxValue')
    let newMaximum = '10';
    if (minimum !== null) {
        newMinimum = minimum;
    }
    if (maximum !== null) {
        newMaximum = maximum;
    }
    if (parseInt(newMinimum) >= parseInt(newMaximum) || newMaximum === '' || newMinimum === '') {
        dispatch(ChangeMode())
    }
    dispatch(SetMinValue(newMinimum))
    dispatch(SetMaxValue(newMaximum))
    dispatch(ChangeCounterToMin())
}