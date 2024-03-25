import React, { useEffect } from "react";
import "./App.css";
import Body from './components/body/body.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginForm from "./pages/LoginPages/LoginPage";
import RegistrationForm from "./pages/RegistratePages/RegistratePage";
import CookiesService from "./services/CookiesService";
import CartPage from "./pages/CartPages/CartPage"

function App() {
  useEffect(() => {
    const cookiesService = new CookiesService(); // Instancia del servicio de cookies
    // Llama al método para obtener las cookies al cargar la aplicación
    cookiesService.getCookies()
      .then(response => {
        // console.log('Cookies:', response.data.cookies);
      })
      .catch(error => {
        console.error('Error al obtener las cookies:', error);
      });
  }, []);

  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Body />}>
          </Route>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegistrationForm />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;