import React, { useContext, useState } from 'react';
import Glogo from '../assets/google.png'
import Gitlogo from '../assets/git-hub.png'
import { GithubAuthProvider, GoogleAuthProvider, getAuth, signInWithPopup } from 'firebase/auth';
import app from '../Firebase/firebase.config';
import { useNavigate } from 'react-router-dom';

const auth = getAuth(app);

const SocialLogin = ({from}) => {
    const [err,setErr] = useState("");
    const navigate = useNavigate();
    const googleProvider = new GoogleAuthProvider();
    const githubProvider = new GithubAuthProvider();
    const handlegoogleSignIn = () => {
        setErr("")
        signInWithPopup(auth,googleProvider)
        .then(result => {
            const user = result.user;
            navigate(from)
        })
        .catch(error => {
            setErr(error.message)
        })
    }
    const handleGitSignIn = () => {
        setErr("")
        signInWithPopup(auth,githubProvider)
        .then(result => {
            const user = result.user;
            navigate(from)
        })
        .catch(error => {
            setErr(error.message)
        })
    }
    return (
        <div>
            <span className='text-red-500 my-3 block'>{err}</span>
            <button onClick={handlegoogleSignIn} className="border rounded-3xl w-full bg-blue-600 flex items-center">
                <div className="p-2 rounded-full bg-white"> <img src={Glogo} className="w-8 h-8 rounded-full inline-block" alt="" /> </div>
                <span className="flex-grow">Continue With Google</span>
            </button>
            <button onClick={handleGitSignIn} className="border rounded-3xl w-full bg-blue-600 flex items-center mt-5">
                <div className="p-2 rounded-full bg-white"> <img src={Gitlogo} className="w-8 h-8 rounded-full inline-block" alt="" /> </div>
                <span className="flex-grow">Continue With Github</span>
            </button>
        </div>
    );
};

export default SocialLogin;