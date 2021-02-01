import React, {ChangeEvent} from "react";
import s from './Display.module.css'

type DisplayProps = {
    mode: boolean
    counter: number
    minValue: number
    maxValue: number
    changeMinValue: (newValue: number) => void
    changeMaxValue: (newValue: string, noValue: boolean) => void
}

export function Display(props: DisplayProps) {
    let style;
    if (props.mode) {
        style = props.counter < props.maxValue ? s.display : `${s.display} ${s.error}`
    } else {

    }

    return <div className={style}>
        {props.mode ? <IncrementMode counter={props.counter} maxValue={props.maxValue}/> :
            <SetMode minValue={props.minValue} maxValue={props.maxValue} changeMinValue={props.changeMinValue}
                     changeMaxValue={props.changeMaxValue}/>}
    </div>
}

type IncrementModeType = {
    counter: number
    maxValue: number
}

function IncrementMode(props: IncrementModeType) {
    return <div className={s.counter}>
        {props.counter}
    </div>
}

type SetModeType = {
    minValue: number
    maxValue: number
    changeMinValue: (newValue: number) => void
    changeMaxValue: (newValue: string, noValue: boolean ) => void
}


function SetMode(props: SetModeType) {
    let style = props.minValue < props.maxValue ? "" : `${s.setMode} ${s.error}`
    const OnMinChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value
        const newNumber = parseInt(newValue)
        props.changeMinValue(newNumber)
    }
    const OnMaxChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
            const newValue = e.target.value
        if ( newValue !== "" ) {
            props.changeMaxValue(newValue, false)
        } else {
            props.changeMaxValue(newValue, true)
        }
    }
    return <div>
        <div> min value: <input className={style} type="number" onChange={OnMinChangeHandler} value={props.minValue}/>
        </div>
        <div> max value: <input className={style} type="number" onChange={OnMaxChangeHandler} value={props.maxValue}/>
        </div>
    </div>
}