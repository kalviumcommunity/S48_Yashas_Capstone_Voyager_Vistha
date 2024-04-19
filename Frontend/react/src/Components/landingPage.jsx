import React from 'react';
import './landingPage.css';
import Footer from './footer'; // Assuming the Footer component is in a file called Footer.js

function LandingPage() {
    return (
        <div>
            <div>
                <nav>
                    <h1>Voyager Vistha </h1>
                   <div  className="button">
                        <div className="loginButton"><button>Log in</button></div>
                        <div className="signupButton"><button>Sign Up</button></div>
                    </div>
                </nav>
            </div>
            <div className="container">
                <h1>Landing Page</h1>
            </div>
            <Footer /> {/* Add the Footer component here */}
        </div>
    );
}

export default LandingPage;
