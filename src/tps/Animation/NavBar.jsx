import React from 'react';
import Logo from "./Logo";
import {motion,useScroll} from "framer-motion";

function NavBar() {
    const {scrollYProgress} = useScroll()
    return <nav className="navbar navbar-expand-lg bg-light fixed-top">
        <div className="container-fluid">
            <motion.div style={{ scaleX: scrollYProgress, height:'5px',backgroundColor: 'darkgoldenrod', position: 'fixed',top:0,right:0,left:0, transformOrigin: 0}}></motion.div>
                <Logo/>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                    data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false"
                    aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
                <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                        <a className="py-2 d-none  nav-link d-md-inline-block" href="#luffy">Luffy</a>
                    </li>
                    <li className="nav-item">
                        <a className="py-2 d-none nav-link d-md-inline-block" href="#cards">Our Team</a>
                    </li>
                    <li className="nav-item">
                        <a className="py-2 d-none nav-link d-md-inline-block" href="#about">About us</a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
}

export default NavBar;