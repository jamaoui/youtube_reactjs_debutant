import React from 'react';
import {Link, Outlet} from "react-router-dom";
import {COLORS} from "../../../config/design-system/colors";

function Layout() {
    const navContainerStyle = {
        backgroundColor: COLORS.primary
    }
    return (
        <>
            <nav style={navContainerStyle} className='navbar-dark nav justify-content-center'>
                    <li className="nav-item">
                        <Link to='/' className='nav-link text-light'>Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/blogs' className='nav-link text-light'>Blogs</Link>
                    </li>
                    <li className="nav-item">
                        <Link to='/contact' className='nav-link text-light'>Contact</Link>
                    </li>
            </nav>

            <div className="container-fluid w-75 mx-auto">
                <Outlet />
            </div>
        </>
    );
}

export default Layout;