import React from 'react';
import '../style/Navbar.css';
import { Link } from 'react-router-dom'

class Navbar extends React.Component {
    render() {
        return (
            <nav className="navbar navbar-light navbar-expand-lg">
                <Link to="/home" className="navbar-brand">Animal Mobile Helping Hands</Link>
                <div className="collapse navbar-collapse">
                    <ul className="navbar-nav mr-auto">
                        <li className="navbar-item">
                            <Link to="/ourMission" className="nav-link">Our Mission</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/contactUs" className="nav-link">Contact Us</Link>
                        </li>
                        <li className="navbar-item">
                            <Link to="/uploadPet" className="nav-link">Upload Pet</Link>
                        </li>
                    </ul>
                </div>
            </nav>
        )
    }
}
export default Navbar;