import React, { useEffect } from 'react';
import './body.css';
import Navbar from '../barranav/barranav';
import CookiesService from '../../services/CookiesService'; // Importa tu servicio de cookies

const BodyComponent = () => {
    useEffect(() => {
        const cookiesService = new CookiesService(); // Instancia del servicio de cookies
        // Llama al método para obtener las cookies al cargar el componente
        cookiesService.getCookies()
            .then(response => {
                console.log('Cookies:', response.data.cookies);
            })
            .catch(error => {
                console.error('Error al obtener las cookies:', error);
            });
    }, []);

    return (
        <div>
            <nav className='barra-nav'>
                <Navbar />
            </nav>
            <h1>¡Bienvenido al cuerpo de la página!</h1>
            <p>Este es un componente simple de React para el cuerpo de la página.</p>
        </div>
    );
};

export default BodyComponent;