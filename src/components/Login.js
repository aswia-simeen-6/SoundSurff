import React, { useState } from 'react';
import '../styling/auth.css';
import Header from './Header';
import axios from 'axios';

function Login() {
    return (
        <>
            <Header />
            <div id="auth-container">
                <form id="auth-form">
                    <h2>Log In</h2>
                    <label htmlFor="email-input">Email</label>
                    <input type="email" id="email-input" required />
                    <label htmlFor="password-input">Password</label>
                    <input type="password" id="password-input" required />
                    <button type="submit">Log In</button>
                    <p>
                        Don't have an account? <a href="/signup">Sign Up</a>
                    </p>
                </form>
            </div>

        </>
    );
}

function Signup() {
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);
    const [valPass, setValPass] = useState(true);
    const [isCreator,setIsCreator]=useState(false);
    const handleCheckboxChange=(e)=>{
        setIsCreator(e.target.checked)
    }
    const validatePass = (e) => {
        const pass = e.target.value
        if (/[A-Z]/.test(pass) && /[a-z]/.test(pass) && /[0-9]/.test(pass) && /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/.test(pass)) {
            setValPass(true);
            setPassword(pass);
        } else {
            if (pass === "") {
                setValPass(true)
            } else {

                setValPass(false);
            }
        }
    }

    const CreateUserAndLogin=(e)=>{
        e.preventDefault();
        axios.post("https://x8ki-letl-twmt.n7.xano.io/api:HHq4b1yw/auth/signup",{
            
        })

    }
    return (
        <>
            <Header />
            <div id="auth-container">
                <form id="auth-form">
                    <h2>Sign Up</h2>
                    <h3 style={{ display: valPass ? "none" : "block", color: "red" }}>Enter Valid Password</h3>
                    <label htmlFor="name-input">Name</label>
                    <input type="text" id="name-input" onChange={(e) => setName(e.target.value.toUpperCase())} value={name} required />
                    <label htmlFor="email-input">Email</label>
                    <input type="email" id="email-input" onChange={(e) => setEmail(e.target.value)} value={email} required />
                    <label htmlFor="password-input">Password</label>
                    <input type="password" id="password-input" onChange={(e) => validatePass(e)} value={password} required />
                    <div className="form-group">
                        <label htmlFor="creator">Are you a creator?</label>
                        <input
                            type="checkbox"
                            name="creator"
                            id="creator"
                            checked={isCreator}
                            onChange={handleCheckboxChange}
                        />
                    </div>
                    <button type="submit" onSubmit={(e)=>CreateUserAndLogin(e)}>Sign Up</button>
                    <p>
                        Already have an account? <a href="login">Log In</a>
                    </p>
                </form>
            </div>
        </>
    );
}

export { Login, Signup };
