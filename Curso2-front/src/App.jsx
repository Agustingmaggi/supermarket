import React from "react";
import "./App.css";
import Body from './components/body/body.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import LoginForm from "./pages/LoginPages/LoginPage";
import RegistrationForm from "./pages/RegistratePages/RegistratePage";
// import CookieComponent from "./pages/HomePages.jsx/HomePage.jsx";

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Body />}>
            {/* <Route index element={<CookieComponent />} /> */}
          </Route>
          <Route path="/login" element={<LoginForm />} />
          <Route path="/register" element={<RegistrationForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;