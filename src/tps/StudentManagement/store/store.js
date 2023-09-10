import {configureStore} from "@reduxjs/toolkit";
import studentsSlice from "../features/StudentsSlice";
import modulesSlice from "../features/ModulesSlice";
import notesSlice from "../features/NotesSlice";

export const store = configureStore({
    reducer: {
        students: studentsSlice,
        modules: modulesSlice,
        notes: notesSlice
    }
})