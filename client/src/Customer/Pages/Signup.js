// import "../PagesStyles/LoginSignUp.css"
import axios from 'axios'
import React, { useEffect, useState } from "react";
import { useHistory } from "react-router-dom"
export default function Signup() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');


    const history = useHistory()
    const handleSignup = async (e) => {
        e.preventDefault()

        const res = await fetch('/signup', {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                email, password
            })
        });

        const data = await res.json();

        if (!data || res.status === 400) {
            console.log(data.errors.email)
            console.log(data.errors.password)
            setEmailError(data.errors.email)
            setPasswordError(data.errors.password)
        }
        else {
            console.log(data);
            history.push('/')
        }
    }

    return (
        <form method="POST" style={{
            width: '360px', margin: '0 auto', padding: '30px', boxShadow: '1px 2px 3px rgba(0,0,0,0.1)',
            borderRadius: '10px', background: 'white'
        }}>
            <h2 style={{ fontSize: '2.4em', fontWeight: '750', marginBottom: '40px' }}>Sign up</h2>

            <label for="email" style={{ display: 'block', margin: '20px 0 10px' }}>Email</label>

            <input type="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter Email" required style={{ padding: '10px 12px', borderRadius: '4px', border: '1px solid #ddd', fontSize: '1em', width: '100%' }} />

            <div class="email error" name="emailError" style={{ color: '#ff0099', margin: '10px 2px', fontSize: '0.8em', fontWeight: 'bold' }}>
                {emailError}
            </div>

            <label for="password" style={{ display: 'block', margin: '20px 0 10px' }}>Password</label>

            <input type="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" required style={{ padding: '10px 12px', borderRadius: '4px', border: '1px solid #ddd', fontSize: '1em', width: '100%' }} />

            <div class="password error" name="passwordError" style={{ color: '#ff0099', margin: '10px 2px', fontSize: '0.8em', fontWeight: 'bold' }}>
                {passwordError}
            </div>

            <button

                style={{
                    marginTop: '30px',
                    borderRadius: '36px',
                    background: '#FEE996',
                    border: '0',
                    textTransform: 'uppercase',
                    fontWeight: '700',
                    fontSize: '0.8em',
                    display: 'block',
                    padding: '10px 16px',
                    letterSpacing: '2px'
                }}
                onClick={handleSignup}
            >Sign up</button>
        </form>

    );
}