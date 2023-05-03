import React, { useContext } from 'react';
import { AuthContest } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';

const PrivetRoutes = ({children}) => {
    const location = useLocation();
    // console.log(location);
    const {user} =  useContext(AuthContest);
    if(user){
        return children
    }
    else {
       return <Navigate to="/login" state={{from:location}} replace></Navigate>
    }
};

export default PrivetRoutes;