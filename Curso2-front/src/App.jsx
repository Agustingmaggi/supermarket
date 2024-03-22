import React from "react";
import "./App.css";
import Body from './components/body/body.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginForm from "./pages/IngresaPages/IngresaPage";
import RegistrationForm from "./pages/RegistratePages/RegistratePage";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Body />} />
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegistrationForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;