import {COUNTER_DECREMENT, COUNTER_INCREMENT, COUNTER_RESET} from "../Reducers/CounterReducer";

export const counterIncrement = () => ({
    type: COUNTER_INCREMENT
})

export const counterDecrement = () => ({
    type: COUNTER_DECREMENT
})

export const counterReset = (value) => ({
    type: COUNTER_RESET,
    payload: {value}
})