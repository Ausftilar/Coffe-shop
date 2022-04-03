import { NavLink } from 'react-router-dom';

import './Navbar.css';

const Navbar = (props) => {
    return (
        <>
            <nav className="navbar">
                <div className="container">
                    <ul className="navbar_list">
                        <li className="navbar_item">
                            <NavLink to="/" className="navbar_link">
                                <img className="navbar_logo" src="/assets/Logo.svg" alt="Logo"/>
                                <span>Coffe house</span>
                            </NavLink>
                        </li>
                        <li className="navbar_item">
                            <NavLink to="/our-coffe" className="navbar_link">
                                <span>Our coffe</span>
                            </NavLink>
                        </li>
                        <li className="navbar_item">
                            <NavLink to="/for-your-pleasure" className="navbar_link">
                                <span>For your pleasure</span>
                            </NavLink>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    )
}

export default Navbar;