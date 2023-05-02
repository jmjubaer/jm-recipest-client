import React from 'react';

const LoadingSpinner = () => {
    return (
        <div className="flex items-center justify-center h-[calc(100vh-136px)]">
        <div className='text-7xl flex items-baseline'>
            <p>L</p>
            <p className='mx-2 w-10 h-10 border-dashed rounded-full animate-spin border-8 border-blue-800'></p>
            <p>ading....</p>
        </div>
        </div>
    );
};

export default LoadingSpinner;