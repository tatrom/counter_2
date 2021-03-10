import React, {useCallback} from "react";
import s from './Console.module.css'
import {Button} from "../../Button/Button";

export type ConsolePropsType = {
    mode: boolean
    changeMode: () => void
    resetCounter: () => void
    incCounter: () => void
    minValue: string
    maxValue: string
    counter: number
    disabledHandler: (type: string) => boolean
}

export const Console = React.memo((props: ConsolePropsType) => {
        return <div className={s.console}>
            {props.mode ?
                <IncrementMode resetCounter={props.resetCounter} changeMode={props.changeMode} incCounter={props.incCounter}
                               counter={props.counter} maxValue={props.maxValue} mode={props.mode}
                               disabledHandler={props.disabledHandler}/> :
                <SetMode changeMode={props.changeMode} mode={props.mode} maxValue={props.maxValue} minValue={props.minValue}
                         disabledHandler={props.disabledHandler}/>}
        </div>
    }
)

type IncrementModeType = {
    resetCounter: () => void;
    incCounter: () => void
    changeMode: () => void
    counter: number
    maxValue: string
    mode: boolean
    disabledHandler: (type: string) => boolean
}

const IncrementMode = React.memo(function (props: IncrementModeType) {
        return <div>
            <div className={s.inc}><Button name={"inc"} callback={props.incCounter}
                                           mode={props.mode} disabledHandler={props.disabledHandler}/></div>
            <div className={s.reset}><Button name={"reset"} callback={props.resetCounter} mode={props.mode}
                                             disabledHandler={props.disabledHandler}/></div>
            <div className={s.set_inc_mode}><Button name={"set"} callback={props.changeMode} mode={props.mode}
                                                    disabledHandler={props.disabledHandler}/></div>
        </div>
    }
)
type SetModeType = {
    changeMode: () => void
    mode: boolean
    minValue: string
    maxValue: string
    disabledHandler: (type: string) => boolean

}

const SetMode = React.memo((props: SetModeType) => {
        const ChangeModeHandler = useCallback(() => {
            props.changeMode()
        }, [props])
        return <div className={s.set_set_mode}>
            <Button name={"set"} callback={ChangeModeHandler} mode={props.mode}
                    minValue={props.minValue} disabledHandler={props.disabledHandler}/>
        </div>
    }
)


