import React, {useCallback} from 'react';
import {connect, useDispatch, useSelector} from "react-redux";
import {CounterSelector} from "./store/CounterSelector";
import {counterDecrement, counterIncrement, counterReset} from "./store/CounterActions";

export default function Counter({counter, onDecrement, onReset, onIncrement}) {
    return (
        <div className={'my-5 '}>
            <div className={'text-center my-2'}>
                {counter}
                <span className="badge badge-primary"></span>
            </div>
            <div className="btn-group" role="group">
                <button type="button" className="btn btn-primary" onClick={onDecrement}>&lt; Decrement</button>
                <button type="button" className="btn btn-primary" onClick={onReset}>Reset</button>
                <button type="button" className="btn btn-primary" onClick={onIncrement}>Increment ></button>
            </div>
        </div>
    );
}

export function CounterStore() {
    const selector = useSelector(CounterSelector)
    const dispatch = useDispatch()
    const increment = useCallback(() => dispatch(counterIncrement()), [])
    const decrement = useCallback(() => dispatch(counterDecrement()), [])
    const reset = useCallback(() => dispatch(counterReset(0)), [])
    return <div>
        <Counter onIncrement={increment} onReset={reset} onDecrement={decrement} counter={selector}/>
    </div>
}