import React from 'react';
import './barranav.css';
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
        <nav className="navbar">
            <ul className="navbar-nav">
                <li className="nav-item">
                    <Link to="/" className="nav-link">Inicio</Link> {/* Cambia el enlace */}
                </li>
                <li className="nav-item">
                    <Link to="/register" className="nav-link">Register</Link> {/* Cambia el enlace */}
                </li>
                <li className="nav-item">
                    <Link to="/login" className="nav-link">Login</Link> {/* Cambia el enlace */}
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;