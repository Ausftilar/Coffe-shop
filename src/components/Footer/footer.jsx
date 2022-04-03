import { NavLink } from 'react-router-dom';

import './Footer.css';

const Footer = (props) => {
    return (
        <>
            <footer className="footer">
                <div className="container">
                    <ul className="footer_list">
                        <li className="footer_item">
                            <NavLink to="/" className="footer_link">
                                <img className="footer_logo" src="/assets/Logo-black.svg" alt="Logo"/>
                                <span>Coffe house</span>
                            </NavLink>
                        </li>
                        <li className="footer_item">
                            <NavLink to="/our-coffe" className="footer_link">
                                <span>Our coffe</span>
                            </NavLink>
                        </li>
                        <li className="footer_item">
                            <NavLink to="/for-your-pleasure" className="footer_link">
                                <span>For your pleasure</span>
                            </NavLink>
                        </li>
                    </ul>
                    <div className="coffe_wrapper-black">
                        <img className="coffe_hr-black" src="/assets/img-coffe/coffe-black.svg" alt="coffe" />
                    </div>
                </div>
            </footer>
        </>
    )
}

export default Footer;