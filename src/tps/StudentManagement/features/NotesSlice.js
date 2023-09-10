import {createSlice} from "@reduxjs/toolkit";

const initialState = {
    notes: [
        {
            id: 1,
            idStudent: 1,
            idModule: 1,
            note: 20
        },
        {
            id: 2,
            idStudent: 1,
            idModule: 2,
            note: 18
        }
    ],
}
const NotesSlice = createSlice({
    name: 'notes',
    initialState,
    reducers: {
        updateNote: (state, action) => {
            const index = (state.notes.findIndex((note) => note.id === action.payload.id))
            const note = state.notes[index]
            state.notes[index] = {...note, note: action.payload.note}
        }
    }
})
export const {updateNote} = NotesSlice.actions
export default NotesSlice.reducer