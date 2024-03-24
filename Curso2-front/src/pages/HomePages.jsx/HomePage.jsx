import React, { useState, useEffect } from 'react';
import CookiesService from '../../services/CookiesService'; // Importa el servicio de cookies

const CookieComponent = () => {
    const [cookies, setCookies] = useState([]);

    useEffect(() => {
        // Función para obtener las cookies cuando el componente se monta
        const fetchCookies = async () => {
            try {
                const cookiesService = new CookiesService();
                const response = await cookiesService.getCookies();
                setCookies(response.data); // Asigna las cookies obtenidas al estado
            } catch (error) {
                console.error('Error fetching cookies:', error)
            }
        };

        fetchCookies(); // Llama a la función de obtener cookies
    }, []); // El segundo argumento de useEffect es un array vacío para que se ejecute solo una vez al montar el componente

    return (
        <div>
            <h1>Cookies</h1>
            <ul>
                {cookies.map((cookie, index) => (
                    <li key={index}>{cookie}</li>
                ))}
            </ul>
        </div>
    );
};

export default CookieComponent;