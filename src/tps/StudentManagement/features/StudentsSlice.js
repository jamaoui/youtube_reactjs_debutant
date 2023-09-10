import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    students: [
        {
            id: 1,
            name: 'Jamaoui Mouad',
            age: 30,
        }
    ],
}
const studentsSlice = createSlice({
    name: 'students',
    initialState,
    reducers: {}
})
export default studentsSlice.reducer