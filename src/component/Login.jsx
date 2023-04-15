import React, { useState } from 'react';
import app from '../firebase/firebase.init';
import { GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";



const Login = () => {
    const [user, setUser] = useState(null);

    const auth = getAuth(app);
    const provider = new GoogleAuthProvider();

    const handleGoogleSignIn = () => {
        signInWithPopup(auth, provider)
        .then(result => {
            const LoginUser = result.user;
            setUser(LoginUser);
        })
        .catch(error => {
            console.log('error', error.message);
        })
    }

    const handleGoogleSignOut = () => {
        signOut(auth)
        .then(result => {
            console.log(result);
            setUser(null)
        })
        .catch(error => {
            console.log(error)
        })
    }

    return (
        <div>
            {/* user ? logout : sign in */}

            { 
            user ? 
            <button onClick={handleGoogleSignOut}>Sign Out</button> 
            :
            <button onClick={handleGoogleSignIn}>Google login</button>}
            
            { user && <div>
                <h2>User: {user.displayName}</h2>
                <p>Email: {user.email}</p>
                <img src={user.photoURL} alt="" />
            </div>}
        </div>
    );
};

export default Login;