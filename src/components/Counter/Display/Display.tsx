import React, {ChangeEvent} from "react";
import s from './Display.module.css'

type DisplayProps = {
    mode: boolean
    counter: number
    minValue: string
    maxValue: string
    changeMinValue: (newValue: string) => void
    changeMaxValue: (newValue: string) => void
}

export function Display(props: DisplayProps) {
    let style;
    if (props.mode) {
        style = props.counter < parseInt(props.maxValue) ? s.display : `${s.display} ${s.error}`
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
    maxValue: string
}

function IncrementMode(props: IncrementModeType) {
    return <div className={s.counter}>
        {props.counter}
    </div>
}

type SetModeType = {
    minValue: string
    maxValue: string
    changeMinValue: (newValue: string) => void
    changeMaxValue: (newValue: string) => void
}


function SetMode(props: SetModeType) {
    let style = parseInt(props.minValue) < parseInt(props.maxValue) ? "" : `${s.setMode} ${s.error}`
    const OnMinChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value
        props.changeMinValue(newValue)
    }
    const OnMaxChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        const newValue = e.target.value
        // if (newValue !== "") {
        //     props.changeMaxValue(newValue)
        // } else {
        // const newNumber = parseInt(newValue)
        props.changeMaxValue(newValue)
        // }
    }
    return <div>
        <div> min value: <input className={style} type="number" onChange={OnMinChangeHandler} value={props.minValue}/>
        </div>
        <div> max value: <input className={style} type="number" onChange={OnMaxChangeHandler} value={props.maxValue}/>
        </div>
    </div>
}