import { INCREMENT, DECREMENT, RESET } from "./actionType"

// Action creators

export const increment = () => ({
    type: INCREMENT,
})

export const decrement = () => ({
    type: DECREMENT,
})

export const reset = () => ({
    type: RESET
})