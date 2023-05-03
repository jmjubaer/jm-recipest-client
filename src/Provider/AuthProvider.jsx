import React, { createContext, useEffect, useState } from 'react';
import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../Firebase/firebase.config';

export const AuthContest = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);

    const createUser = (email,password) => {
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signIn = (email,password) => {
        return signInWithEmailAndPassword(auth,email,password)
    }

    const googleProvider = new GoogleAuthProvider();
    const googleSignIn = () => {
        signInWithPopup(auth,googleProvider);
    }

    const githubProvider = new GithubAuthProvider();
    const githubSignIn = () => {
        signInWithPopup(auth,githubProvider)
    }

    const logout = () => {
        signOut(auth)
    }
    useEffect(()=> {
        const unMount = onAuthStateChanged(auth,(loggedUser => {
            setUser(loggedUser)
        }))
        return () => {
            unMount();
        }
    },[])
    const authInfo = {
        githubSignIn,
        googleSignIn,
        createUser,
        logout,
        signIn,
        user,
    }
    return (
        <AuthContest.Provider value={authInfo}>
            {children}
        </AuthContest.Provider>
    );
};

export default AuthProvider;