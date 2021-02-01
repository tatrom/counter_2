import React from "react";
import s from './Button.module.css'

type ButtonType = {
    name: string
    callback: () => void
    counter?: number
    maxValue?: number
    mode: boolean
    minValue?: number
    disabledHandler: (type: string) => boolean

}

export function Button(props: ButtonType) {

    return <div>
        <button className={s.button} onClick={props.callback} disabled={props.disabledHandler(props.name)}>{props.name}</button>
    </div>
}