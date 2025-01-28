import React, { useContext } from 'react';
import { AuthContext } from '../providers/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <p className='text-3xl'>Looding...</p>
    }
    if (user) {
        return children
    }
    else {
        return <Navigate to='/login'></Navigate>
    }
};

export default PrivateRoute;