import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    modules: [
        {
            id: 1,
            title: 'ReactJS',
        },
        {
            id: 2,
            title: 'PHP',
        },
    ],
}
const studentsSlice = createSlice({
    name: 'modules',
    initialState,
    reducers: {}
})
export default studentsSlice.reducer