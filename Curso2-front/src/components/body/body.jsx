import React from 'react';
import './body.css';
import Navbar from '../barranav/barranav';

const BodyComponent = () => {

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