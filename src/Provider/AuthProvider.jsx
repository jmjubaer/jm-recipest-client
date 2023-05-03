import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import app from '../Firebase/firebase.config';

export const AuthContest = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);
    const createUser = (email,password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }
    const signIn = (email,password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const logout = () => {
        signOut(auth)
    }
    useEffect(()=> {
        const unMount = onAuthStateChanged(auth,(loggedUser => {
            setUser(loggedUser)
            setLoading(false)
        }))
        return () => {
            unMount();
        }
    },[])
    const authInfo = {
        createUser,
        loading,
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