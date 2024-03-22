import React, { useState } from 'react';
import RegisterService from '../../services/RegisterService';

const RegistrationForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const registerService = new RegisterService();

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    };

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = {
            email,
            password
        };

        try {
            const response = await registerService.registerUser(formData);

            if (response.status === 200) {
                // Procesar respuesta exitosa
                console.log('Registro exitoso');
            } else {
                // Procesar respuesta de error
                console.log('Error al registrar');
            }
        } catch (error) {
            console.log('Error de conexión', error);
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Email:</label>
                <input type="email" value={email} onChange={handleEmailChange} />
            </div>
            <div>
                <label>Password:</label>
                <input type="password" value={password} onChange={handlePasswordChange} />
            </div>
            <button type="submit" style={{ backgroundColor: '#333', color: '#fff' }} >Registrarse</button>
        </form>
    );
};

export default RegistrationForm;