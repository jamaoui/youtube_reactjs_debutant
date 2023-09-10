import React from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./pages/Layout";
import Blogs from "./pages/Blogs";
import Contact from "./pages/Contact";
import Homepage from "./pages/Homepage";
import PageNotFound from "./pages/PageNotFound";

export default function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Homepage />} />
                    <Route path='blogs' element={<Blogs />} />
                    <Route path='contact' element={<Contact />} />
                    <Route path='*' element={<PageNotFound />}></Route>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}