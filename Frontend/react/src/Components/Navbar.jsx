
import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Css/landingPage.css';
import Footer from './footer';

function LandingPage() {
  
    return (
        <div>
            <div>
                <nav>
                    <div className="Appname">
                    <Link to="/">  <h1>Voyager Vistha</h1> </Link>
                    </div>
                    <div className="button">
                    <Link to="/Login"> <div className="loginButton"><button>Log out</button></div>  </Link>
                    </div>
                </nav>
            </div>
            
            <Footer />
        </div>
    );
}

export default LandingPage;
