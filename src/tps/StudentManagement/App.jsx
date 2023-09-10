import React from 'react';
import {Provider} from "react-redux";
import {store} from "./store/store";
import StudentList from "./StudentList";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import PageNotFound from "../../basics/Router/pages/PageNotFound";
import StudentUpdate from "./StudentUpdate";
import NavBar from "./NavBar";
import NoteUpdate from "./NoteUpdate";

function App() {
    return (
        <div className="container my-4">
            <Provider store={store}>
                <BrowserRouter>
                    <NavBar />
                    <Routes>
                        <Route index element={<StudentList/>}/>
                        <Route path='/students' element={<StudentList/>}/>
                        <Route path='/student/:id/update' element={<StudentUpdate/>}/>
                        <Route path='/note/:id/update' element={<NoteUpdate/>}/>
                        <Route path='*' element={<PageNotFound/>}></Route>
                    </Routes>
                </BrowserRouter>
            </Provider>
        </div>
    );
}

export default App;