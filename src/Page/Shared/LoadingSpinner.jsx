import React from 'react';
// if want to get a rotate animation past this code in index.css
/*
.animation{
    animation: spin 0.5s linear infinite;
}
@keyframes spin{
    0%{
        transform: rotate(180deg);
    }
    100%{
        transform: rotate(360deg);
    }
}
*/
const LoadingSpinner = () => {

    return (
        <div style={{display: 'flex',alignItems:"center",justifyContent:"center",minHeight:"calc(100vh-136px)"}}>
        <div style={{fontSize:"72px",display: 'flex', alignItems:"baseline"}}>
            <p>L</p>
            <p style={{margin:"0 8px",width:"40px",height:"40px",border:"8px dashed blue",borderRadius:"50%"}} className='animation'></p>
            <p>ading....</p>
        </div>
        </div>
    );
};

export default LoadingSpinner;