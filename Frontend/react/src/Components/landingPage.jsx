import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Css/landingPage.css';
import Footer from './footer';
import image1 from '../Images/bali.avif';
import image3 from '../Images/karnatAka.jpg';
import image4 from '../Images/river scean.webp';
import image5 from '../Images/taj mahal.webp';

function LandingPage() {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);
    const images = [image1,  image3, image4, image5]; // Array of imported image files

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentImageIndex(prevIndex =>
                prevIndex === images.length - 1 ? 0 : prevIndex + 1
            );
        }, 5000); // Change image every 5 seconds (adjust as needed) 

        return () => clearInterval(intervalId); // Cleanup function to clear interval
    }, [images.length]);

    return (
        <div>
            <div>
                <nav>
                    <div className="Appname">
                    <Link to="/">  <h1>Voyager Vistha</h1> </Link>
                    </div>
                    <div className="button">
                    <Link to="/Login"> <div className="loginButton"><button>Log in</button></div>  </Link>
                    <Link to="/Signup">  <div className="signupButton"><button>Sign Up</button></div> </Link>
                         </div>
                </nav>
            </div>
            <div className="container">
                <h1>Landing Page</h1>
            </div>
            <Footer />
        </div>
    );
}

export default LandingPage;
