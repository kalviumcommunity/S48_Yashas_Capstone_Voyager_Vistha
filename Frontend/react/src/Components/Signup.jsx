import React, { useState } from 'react';
import { Link } from 'react-router-dom';

function Signup() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [age, setAge] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handleAgeChange = (e) => {
        setAge(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleConfirmPasswordChange = (e) => {
        setConfirmPassword(e.target.value);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        // You can add your signup logic here, such as sending a request to your backend server
        console.log("Username:", username);
        console.log("Email:", email);
        console.log("Age:", age);
        console.log("Password:", password);
        console.log("Confirm Password:", confirmPassword);
        // Reset the form fields after submission
        setUsername('');
        setEmail('');
        setAge('');
        setPassword('');
        setConfirmPassword('');
    }

    return (
        <div>
            <div>
                <nav>
                    <div className="Appname">
                        <Link to="/">
                            <h1>Voyager Vistha</h1>
                        </Link>
                    </div>
                    <div className="button">
                        <Link to="/Login">
                            <div className="loginButton">
                                <button>Log in</button>
                            </div>
                        </Link>
                    </div>
                </nav>
            </div>
            <div>
                <form onSubmit={handleSubmit}>
                    <label>
                        Username:
                        <input type="text" value={username} onChange={handleUsernameChange} />
                    </label>
                    <br />
                    <label>
                        Email:
                        <input type="email" value={email} onChange={handleEmailChange} />
                    </label>
                    <br />
                    <label>
                        Age:
                        <input type="number" value={age} onChange={handleAgeChange} />
                    </label>
                    <br />
                    <label>
                        Password:
                        <input type="password" value={password} onChange={handlePasswordChange} />
                    </label>
                    <br />
                    <label>
                        Confirm Password:
                        <input type="password" value={confirmPassword} onChange={handleConfirmPasswordChange} />
                    </label>
                    <br />
                    <button type="submit">Sign Up</button>
                </form>
            </div>
        </div>
    )
}

export default Signup;
