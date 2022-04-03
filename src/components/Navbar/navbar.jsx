import { NavLink } from 'react-router-dom';

import './Navbar.css';

const Navbar = (props) => {
    return (
        <>
            <nav className="navbar">
                <div className="container">
                    <ul className="navbar_list">
                        <li className="navbar_item">
                            <NavLink to="/" className="nav-link">
                                <img className="navbar_logo" src="/assets/Logo.svg" alt="Logo"/>
                                Coffe house
                            </NavLink>
                        </li>
                        <li className="navbar-item">
                            <NavLink to="/our-coffe" className="nav-link">Our coffe</NavLink>
                        </li>
                        <li className="navbar-item">
                            <NavLink to="/for-your-pleasure" className="nav-link">For your pleasure</NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar;