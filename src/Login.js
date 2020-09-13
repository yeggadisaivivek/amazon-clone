import React, { useState } from 'react';
import './Login.css';
import { Link } from '@material-ui/core';
import {db, auth} from './firebase';
import { useHistory } from 'react-router-dom';

function Login() {

    const history = useHistory();

    const signIn = (event) => {
        event.preventDefault();
        auth.signInWithEmailAndPassword(email,password)
            .then((auth) => {
                console.log(auth);
                history.push("/");
                
            })
            .catch(error => alert(error.message));
    };
    const register = (event) => {
        event.preventDefault();
        auth.createUserWithEmailAndPassword(email,password)
            .then((auth) => {
                if(auth){
                    history.push("/");
                }
            })
            .catch(error => alert(error.message))

    };
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <div className="login">
            <Link to='/'>
                <img className="login_logo" src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png' />
            </Link>

            <div className="login_container">
                <h1>Sign in</h1>
                <form>
                    <h5>Email</h5>
                    <input type="text" value={email} onChange= {(event) => setEmail(event.target.value)} />

                    <h5>Password</h5>
                    <input type="password" value={password} onChange= {(event) => setPassword(event.target.value)} />

                    <button type="submit" className="login_signInButton" onClick={signIn}>Sign In</button>
                </form>

                <button className="login_registerButton" onClick={register}>Create New Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
