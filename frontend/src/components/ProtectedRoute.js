import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import {AuthContext} from '../context/AuthContext.js';
import { Navigate } from 'react-router-dom'; // Use Navigate instead of Redirect



const ProtectedRoute = ({ component: Component, ...rest }) => {
    const { user } = AuthContext();

    return user ? <Component /> : <Navigate to="/login" />;

};

export default ProtectedRoute;
