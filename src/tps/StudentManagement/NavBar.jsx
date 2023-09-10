import {Link} from "react-router-dom";

function App() {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                    <Link className="nav-link" to={'/'}>Students</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to={'/'}>Notes</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to={'/'}>Modules</Link>
                </li>
            </ul>
        </nav>
    );
}

export default App;