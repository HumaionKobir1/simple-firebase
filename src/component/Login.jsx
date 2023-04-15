import React from 'react';
import {GoogleAuthProvider, getAuth} from 'firebase/auth';
import app from '../firebase/firebase.init';

const Login = () => {
    const auth = getAuth(app);
    const Provider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        console.log('google mama sign in');
    }

    return (
        <div>
            <button onClick={handleGoogleSignIn()}>Google login</button>
        </div>
    );
};

export default Login;