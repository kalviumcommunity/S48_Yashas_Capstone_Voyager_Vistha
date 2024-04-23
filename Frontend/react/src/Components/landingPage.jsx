import React, { useState, useEffect } from 'react';
import './landingPage.css';
import Footer from './footer'; // Assuming the Footer component is in a file called Footer.js

// Import your images
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
                        <h1>Voyager Vistha</h1>
                    </div>
                    <div className="button">
                        <div className="loginButton"><button>Log in</button></div>
                        <div className="signupButton"><button>Sign Up</button></div>
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
