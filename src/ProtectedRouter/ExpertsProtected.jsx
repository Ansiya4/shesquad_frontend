import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';
import { jwtDecode } from 'jwt-decode';

function ExpertsProtected() {
    const token = localStorage.getItem('token')
    if (token ){
        const decoded = jwtDecode(token);
        if (decoded.is_admin && decoded.role === 'admin'){
            return <Navigate to={'/dashboard/'}/>
        } else if (decoded.role === 'expert'){
            return <Outlet/>
        } else{
            return <Navigate to={'/'}/>
        }
    } else {
        return <Navigate to={'/login'}/>
    }
}

export default ExpertsProtected