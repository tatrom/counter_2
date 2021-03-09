import React from "react";
import {Display} from "./Display/Display";
import s from './Counter2.module.css'
import {Console} from "./Console/Console";
type CounterType = {
    mode: boolean
    counter: number
    changeMode: () => void
    resetCounter: () => void
    incCounter: () => void
    minValue: string
    maxValue: string
    changeMaxValue: (newValue: string) => void
    changeMinValue: (newValue: string) => void
    disabledHandler: (type: string) => boolean
}

export function Counter2(props:CounterType) {

    return <div className={s.counter}>
        <Display mode={props.mode} counter={props.counter} minValue={props.minValue} maxValue={props.maxValue} changeMaxValue={props.changeMaxValue} changeMinValue={props.changeMinValue} />
        <Console mode={props.mode} changeMode={props.changeMode} resetCounter={props.resetCounter} incCounter={props.incCounter} counter={props.counter} maxValue={props.maxValue} minValue={props.minValue} disabledHandler={props.disabledHandler} />
    </div>
}