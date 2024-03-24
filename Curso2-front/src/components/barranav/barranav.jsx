import React, { useState } from 'react';
import './barranav.css';
import { Link } from "react-router-dom";
import CookiesService from '../../services/CookiesService'; // Importa tu servicio de cookies

const Navbar = () => {
    const [cookies, setCookies] = useState(null); // Estado para almacenar las cookies
    const cookiesService = new CookiesService(); // Instancia del servicio de cookies

    const handleClickInicio = () => {
        // Llama al método para obtener las cookies al hacer clic en "Inicio"
        cookiesService.getCookies()
            .then(response => {
                // Actualiza el estado con las cookies obtenidas
                setCookies(response.data.cookies);
            })
            .catch(error => {
                console.error('Error al obtener las cookies:', error);
            });
    };

    return (
        <nav className="navbar">
            <ul className="navbar-nav">
                <li className="nav-item">
                    {/* Agrega el controlador de eventos al enlace de "Inicio" */}
                    <Link to="/" className="nav-link" onClick={handleClickInicio}>Inicio</Link>
                </li>
                <li className="nav-item">
                    <Link to="/register" className="nav-link">Register</Link>
                </li>
                <li className="nav-item">
                    <Link to="/login" className="nav-link">Login</Link>
                </li>
            </ul>
            {/* Muestra las cookies si están disponibles */}
            {cookies && (
                <div>
                    <h3>Cookies:</h3>
                    <pre>{JSON.stringify(cookies, null, 2)}</pre>
                </div>
            )}
        </nav>
    );
}

export default Navbar;