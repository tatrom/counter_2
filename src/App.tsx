import React, {useState} from 'react';
import './App.css';
import {Counter2} from "./components/Counter/Counter2";


function App() {
    let minimum = localStorage.getItem('minValue')
    let newMinimum = 1;
    let maximum = localStorage.getItem('maxValue')
    let newMaximum = 10;
    if (minimum !== null) {
        newMinimum = parseInt(minimum)
    }
    if (maximum !== null) {
        newMaximum = parseInt(maximum)
    }
    let [counter, setCounter] = useState<number>(newMinimum)
    let [mode, setMode] = useState<boolean>(false)
    let [minValue, setMinValue] = useState<number>(newMinimum)
    let [maxValue, setMaxValue] = useState<number>(newMaximum)
    let [noMaxValue, setNoMaxValue] = useState<boolean>(false)
    const ChangeMode = () => {
        setMode(!mode);
        setCounter(minValue);
        // localStorage.setItem('minValue', minValue.toString())
        // localStorage.setItem('maxValue', maxValue.toString())
    }
    const IncCounter = () => {
        setCounter(counter + 1)
    }
    const ResetCounter = () => {
        setCounter(newMinimum);
    }
    const ChangeMinValue = (newValue: number) => {
        setMinValue(newValue)
        localStorage.setItem('minValue', newValue.toString())
    }
    const ChangeMaxValue = (newValue: string, noValue: boolean) => {
        if ( noValue) {
            setNoMaxValue(noValue)
            let newMax = parseInt(newValue);
            setMaxValue(newMax)
            localStorage.setItem('maxValue', newValue.toString())
        } else {
            setNoMaxValue(noValue)
            let newMax = parseInt(newValue);
            setMaxValue(newMax)
            localStorage.setItem('maxValue', newValue.toString())
        }
    }

    const DisabledHandler = (type: string): boolean => {
        if (type === "set") {
            if (minValue >= maxValue ) {
                return true
            }
            if (noMaxValue) {
                return true
            }
            return false
        }
        if (type === "inc") {
            if (counter >= maxValue) {
                return true
            }

        }

        return false
    }
    console.log(localStorage.getItem('minValue'))
    return (
        <div className="App">
            <Counter2 mode={mode} counter={counter} changeMode={ChangeMode} resetCounter={ResetCounter}
                      incCounter={IncCounter} minValue={minValue} maxValue={maxValue}
                      changeMinValue={ChangeMinValue}
                      changeMaxValue={ChangeMaxValue}
                      disabledHandler={DisabledHandler}
            />
        </div>
    );
}

export default App;