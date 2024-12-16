import React, { ReactNode } from 'react'
import { useAuth } from '../Context/UserContext';
import { Navigate } from 'react-router-dom';

interface RouteGuardProps {
    children: ReactNode;
}

function RouteGuard({children}: {children: ReactNode}) {
    const {isAuthenticated} = useAuth();

    if(!isAuthenticated){
        return <Navigate to="/login" replace/>;
    }

    return <>{children}</>;
}

export default RouteGuard