import React, { useState } from 'react';
import app from '../firebase/firebase.init';
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup, signOut } from "firebase/auth";



const Login = () => {
    const [user, setUser] = useState(null);

    const auth = getAuth(app);
    const providerGoogle = new GoogleAuthProvider();
    const providerGithub = new GithubAuthProvider();


    const handleGoogleSignIn = () => {
        signInWithPopup(auth, providerGoogle)
        .then(result => {
            const LoginUser = result.user;
            setUser(LoginUser);
        })
        .catch(error => {
            console.log('error', error.message);
        })
    }


    const handleGithubSignIn = () => {
        signInWithPopup(auth, providerGithub)
        .then(result => {
            const loginUser = result.user;
            console.log(loginUser)
            setUser(loginUser)
        })
        .catch(error => {
            console.log(error);
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
            <>
                <button onClick={handleGoogleSignIn}>Google login</button>
                <button onClick={handleGithubSignIn}>Github Sign in</button>
            </>
            }
            
            { user && <div>
                <h2>User: {user.displayName}</h2>
                <p>Email: {user.email}</p>
                <img src={user.photoURL} alt="" />
            </div>}
        </div>
    );
};

export default Login;