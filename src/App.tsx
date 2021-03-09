import React, {useEffect} from 'react';
import './App.css';
import {Counter2} from "./components/Counter/Counter2";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./store/redux-store";
import {
    ChangeMaxValueTC,
    ChangeMinValueTC,
    ChangeModeTC,
    IncCounter,
    InitialStateType,
    ResetCounter,
    SetMinAndMaxTC
} from "./store/counter-reducer";


function App() {
    const dispatch = useDispatch()
    const state = useSelector<AppStoreType, InitialStateType>(state => state.counter)
    useEffect(() => {
        dispatch(SetMinAndMaxTC())
    }, [dispatch])


    const ChangeMode = () => {
        dispatch(ChangeModeTC(state.minValue, state.maxValue))
    }

    const ChangeMinValue = (newValue: string) => {
        dispatch(ChangeMinValueTC(newValue))
    }
    const ChangeMaxValue = (newValue: string) => {
        dispatch(ChangeMaxValueTC(newValue))
    }
    const DisabledHandler = (type: string): boolean => {
        if (type === "set") {
            if (parseInt(state.minValue) >= parseInt(state.maxValue) || state.minValue === '' || state.maxValue === '') {
                return true
            }
            if (state.maxValue && state.mode) {
                return false
            }
        }
        if (type === "inc") {
            if (state.counter >= parseInt(state.maxValue)) {
                return true
            }
        }
        return false
    }

    const IncCounterHandler = () => {
        dispatch(IncCounter())
    }

    const ResetCounterHandler = () => {
        dispatch(ResetCounter())
    }
    return (
        <div className="App">
            <Counter2 mode={state.mode} counter={state.counter} changeMode={ChangeMode}
                      resetCounter={ResetCounterHandler}
                      incCounter={IncCounterHandler}
                      minValue={state.minValue}
                      maxValue={state.maxValue}
                      changeMinValue={ChangeMinValue}
                      changeMaxValue={ChangeMaxValue}
                      disabledHandler={DisabledHandler}
            />
        </div>
    );
}

export default App;