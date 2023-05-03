import React, { useContext } from 'react';
import { AuthContest } from '../Provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import LoadingSpinner from './Shared/LoadingSpinner';

const PrivetRoutes = ({children}) => {
    const location = useLocation();
    const {user,loading} =  useContext(AuthContest);
    if(loading){
        return <LoadingSpinner></LoadingSpinner>
    }
    if(user){
        return children
    }
    else {
       return <Navigate to="/login" state={{from:location}} replace></Navigate>
    }
};

export default PrivetRoutes;