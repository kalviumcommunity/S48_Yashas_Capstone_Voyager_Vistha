import React from "react";
import { Routes, Route } from 'react-router-dom';
import LandingPage from './Components/landingPage.jsx';
import  Login from './Components/Login.jsx';
import Signup from './Components/Signup.jsx';

function App() {
  return (
    <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/Login" element={<Login/>} />
        <Route path="/Signup" element={<Signup />} />

    </Routes>
  );
}

export default App;