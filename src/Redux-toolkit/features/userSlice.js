import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    name: 'Jamaoui',
    country: 'ma',
    age: 28,
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        resetUser: (state) => {
            // Immer
            state.name = undefined
            state.country = undefined
            state.age = undefined
        },
        updateUser: (state, action) => {
            const {name,country,age} = action.payload
            state.name = name
            state.country = country
            state.age = age
        },
    }
})
export const {resetUser, updateUser} = userSlice.actions
export default userSlice.reducer