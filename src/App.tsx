import React, {useCallback, useEffect} from 'react';
import './App.css';
import {Counter2} from "./components/Counter/Counter2";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./store/redux-store";
import {
    ChangeMaxValueTC,
    ChangeMinValueTC,
    ChangeModeTC,
    IncCounter,
    ResetCounter,
    SetMinAndMaxTC
} from "./store/counter-reducer";


function App() {
    const dispatch = useDispatch()
    const minValue = useSelector<AppStoreType, string>(state => state.counter.minValue)
    const maxValue = useSelector<AppStoreType, string>(state => state.counter.maxValue)
    const mode = useSelector<AppStoreType, boolean>(state => state.counter.mode)
    const counter = useSelector<AppStoreType, number>(state => state.counter.counter)
    useEffect(() => {
        dispatch(SetMinAndMaxTC())
    }, [dispatch])


    const ChangeMode = useCallback(() => {
        dispatch(ChangeModeTC(minValue, maxValue))
    }, [dispatch, minValue, maxValue])
    const ChangeMinValue = useCallback((newValue: string) => {
        dispatch(ChangeMinValueTC(newValue))
    }, [dispatch])
    const ChangeMaxValue = useCallback((newValue: string) => {
        dispatch(ChangeMaxValueTC(newValue))
    }, [dispatch])
    const DisabledHandler = useCallback((type: string): boolean => {
        if (type === "set") {
            if (parseInt(minValue) >= parseInt(maxValue) || minValue === '' || maxValue === '') {
                return true
            }
            if (maxValue && mode) {
                return false
            }
        }
        if (type === "inc") {
            if (counter >= parseInt(maxValue)) {
                return true
            }
        }
        return false
    }, [minValue, maxValue, counter, mode])

    const IncCounterHandler = useCallback(() => {
        dispatch(IncCounter())
    }, [dispatch])

    const ResetCounterHandler = useCallback(() => {
        dispatch(ResetCounter())
    }, [dispatch])
    return (
        <div className="App">
            <Counter2 mode={mode} counter={counter} changeMode={ChangeMode}
                      resetCounter={ResetCounterHandler}
                      incCounter={IncCounterHandler}
                      minValue={minValue}
                      maxValue={maxValue}
                      changeMinValue={ChangeMinValue}
                      changeMaxValue={ChangeMaxValue}
                      disabledHandler={DisabledHandler}
            />
        </div>
    );
}

export default App;