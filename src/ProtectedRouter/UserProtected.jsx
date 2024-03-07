import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

function UserProtected() {
    const token = localStorage.getItem('token')
    if (token) {
        const decoded = jwtDecode(token);
        if (decoded.is_admin) {
            return <Navigate to={'/dashboard/'}/>;
        } else if (decoded.role ==='expert') {
            return <Navigate to={'/experthome/'}/>;
        }else{
            return <Outlet/> 
        }
    } else {
        return <Navigate to={'/login'}/>
    }
}

export default UserProtected;