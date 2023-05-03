import React from 'react';
import image from '../../assets/not-found0image.png' 
import { useNavigate, useRouteError } from 'react-router-dom';

const NotFound = () => {
    const error = useRouteError();
    const navigate = useNavigate();
    const handleBack = () => {
        navigate(-1);
    }
    return (
        <div className= 'text-center p-5 text-yellow-300 flex flex-col items-center justify-center h-screen'>
            <img src={image} className='w-auto h-[50vh]'/>
            <p className='text-3xl md:text-5xl  mt-4'>{error?.error?.message}</p>
            <button className='mt-8 px-5 py-3 bg-blue-600 text-white text-2xl rounded-md' onClick={handleBack}>Go Back</button>
        </div>
    );
};

export default NotFound;