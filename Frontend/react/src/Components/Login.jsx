import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can add your login logic here, such as sending a request to your backend server
        console.log("Email:", email);
        console.log("Password:", password);
        // Reset the form fields after submission
        setEmail('');
        setPassword('');
    }

    return (
        <div>
            <div>
                <nav>
                    <div className="Appname">
                        <Link to="/"><h1>Voyager Vistha</h1></Link>
                    </div>
                    <div className="button">
                        <Link to="/Signup">
                            <div className="signupButton">
                                <button>Sign Up</button>
                            </div>
                        </Link>
                    </div>
                </nav>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <label>
                        Email:
                        <input type="email" value={email} onChange={handleEmailChange} />
                    </label>
                    <br />
                    <label>
                        Password:
                        <input type="password" value={password} onChange={handlePasswordChange} />
                    </label>
                    <br />
                    <button type="submit">Login</button>
                </form>
            </div>
        </div>
    )
}

export default Login;
