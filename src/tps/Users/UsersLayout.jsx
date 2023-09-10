import React from 'react';
import {BrowserRouter, Link, Outlet, Route, Routes} from "react-router-dom";
import UsersTable from "./UsersTable";
import UsersAdd from "./UsersAdd";
import UsersEdit from "./UsersEdit";
import UsersDelete from "./UsersDelete";

function UsersLayout() {
    return (
        <>
            <BrowserRouter>
                <nav className={'navbar navbar-expand-lg navbar-light bg-light'}>
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to={'/'} className='nav-link'>Users list</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={'/user/create'} className='nav-link'>Add User</Link>
                        </li>
                    </ul>
                </nav>
                <Routes>
                    <Route index element={<UsersTable />} />
                    <Route path={'/user/create'} element={<UsersAdd />} />
                    <Route path={'/user/:id/edit'} element={<UsersEdit />} />
                    <Route path={'/user/:id/delete'} element={<UsersDelete />} />
                </Routes>
            </BrowserRouter>

            <Outlet />

        </>
    );
}

export default UsersLayout;