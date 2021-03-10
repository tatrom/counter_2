import React from "react";
import s from './Button.module.css'

type ButtonType = {
    name: string
    callback: () => void
    mode: boolean
    minValue?: string
    disabledHandler: (type: string) => boolean

}

export const Button = React.memo(function (props: ButtonType) {

        return <div>
            <button className={s.button} onClick={props.callback}
                    disabled={props.disabledHandler(props.name)}>{props.name}</button>
        </div>
    }
)