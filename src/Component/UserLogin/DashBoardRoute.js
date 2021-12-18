import React from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import useAuth from '../../Hooks/useAuth';

const DashBoardRoute = ({children, ...rest}) => {
    const {user, loading} = useAuth();
    let location = useLocation();

    if(loading){
        return  <div class="d-flex justify-content-center">
        <div class="spinner-border" role="status">
          <span class="visually-hidden">Loading...</span>
        </div>
      </div>
       
    };
            if(user?.email){
                return children;
                
            }

            return <Navigate to="/login" state={{ from: location }} />;
};

export default DashBoardRoute;