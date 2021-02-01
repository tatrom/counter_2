import React from "react";
import s from './Console.module.css'
import {Button} from "../../Button/Button";

type ConsoleType = {
    mode: boolean
    changeMode: () => void
    resetCounter: () => void
    incCounter: () => void
    minValue: number
    maxValue: number
    counter: number
    disabledHandler: (type: string) => boolean
}

export function Console(props: ConsoleType) {
    return <div className={s.console}>
        {props.mode ?
            <IncrementMode resetCounter={props.resetCounter} changeMode={props.changeMode} incCounter={props.incCounter}
                           counter={props.counter} maxValue={props.maxValue} mode={props.mode}
                           disabledHandler={props.disabledHandler}/> :
            <SetMode changeMode={props.changeMode} mode={props.mode} maxValue={props.maxValue} minValue={props.minValue}
                     disabledHandler={props.disabledHandler}/>}
    </div>
}

type IncrementModeType = {
    resetCounter: () => void;
    incCounter: () => void
    changeMode: () => void
    counter: number
    maxValue: number
    mode: boolean
    disabledHandler: (type: string) => boolean
}

function IncrementMode(props: IncrementModeType) {
    return <div>
        <div className={s.inc}><Button name={"inc"} callback={props.incCounter} maxValue={props.maxValue}
                                       counter={props.counter}
                                       mode={props.mode} disabledHandler={props.disabledHandler}/></div>
        <div className={s.reset}><Button name={"reset"} callback={props.resetCounter} mode={props.mode}
                                         disabledHandler={props.disabledHandler}/></div>
        <div className={s.set_inc_mode}><Button name={"set"} callback={props.changeMode} mode={props.mode}
                                                disabledHandler={props.disabledHandler}/></div>
    </div>
}

type SetModeType = {
    changeMode: () => void
    mode: boolean
    minValue: number
    maxValue: number
    disabledHandler: (type: string) => boolean

}

function SetMode(props: SetModeType) {
    const ChangeModeHandler = () => {
        props.changeMode()
    }
    return <div className={s.set_set_mode}>
        <Button name={"set"} callback={ChangeModeHandler} mode={props.mode} maxValue={props.maxValue}
                minValue={props.minValue} disabledHandler={props.disabledHandler}/>
    </div>
}


