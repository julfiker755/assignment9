import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useauth from '../../Usehooks/useauth';
import Loder from '../../Loder/Loder';

const Private = ({ children }) => {
    let location = useLocation();
    const { user, loading } = useauth()
    if (loading) {
       return  <Loder></Loder>
    }
   
    if (user && user.uid) {
        return children
    }
    return <Navigate to="/login" state={{ from: location }} replace></Navigate>
};

export default Private;

