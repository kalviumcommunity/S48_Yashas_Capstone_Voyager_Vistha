import React from "react";
import { Routes, Route } from 'react-router-dom';
import LandingPage from './Components/landingPage'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        </Routes>
    </div>
  );
}

export default App;