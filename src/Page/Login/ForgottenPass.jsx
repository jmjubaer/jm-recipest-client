import React, { useRef, useState } from 'react';
import app from '../../Firebase/firebase.config';
import { getAuth, sendPasswordResetEmail } from 'firebase/auth';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const ForgottenPass = () => {
    const [feedback,setFeedback] = useState("");
    const emailRef = useRef();
    const auth = getAuth(app)
    const handleRest = (event) => {
        event.preventDefault();
        const email = emailRef.current.value;
        sendPasswordResetEmail(auth,email)
        .then((result) => {
            setFeedback("Check your email for reset password");
            toast("Send reset password confirmation in your mailbox");
            event.target.reset();
        })
        .catch((error) => {
            setFeedback(error.message)
        })
    }
    return (
        <div className='min-h-[calc(100vh-100px)] flex flex-col justify-center'>
            <form action="" className='border-2 w-1/2 mx-auto p-10 flex flex-col' onSubmit={handleRest}>
                <input className='border-2 text-lg p-2' type="email" name="email" placeholder='Enter your email' ref={emailRef} required />
                <p className='text-red-400'>{feedback}</p>
                <input className='py-3 px-5 bg-blue-600 text-white w-1/2 mx-auto rounded-xl mt-5' type="submit" value="Reset" />
            </form>
        </div>
    );
};

export default ForgottenPass;