import { jwtDecode } from 'jwt-decode';
import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

function PrivateRoutes() {
    const token = localStorage.getItem('token')
    if (token){
        const decoded = jwtDecode(token);
        if (decoded.is_admin){
            return <Navigate to={'/dashboard/'}/>
        } else if (decoded.category){
            return <Navigate to={'/experthome/'}/>
        } 
        else {
           return <Navigate to={'/'}/>
        }
    }
    return <Outlet/> 
}

export default PrivateRoutes;