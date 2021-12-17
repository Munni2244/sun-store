import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import admin from '../../../Images/admin.png'

const DashboardHome = () => {
    const {loading}=useAuth();
    if(loading){
        return(
            <div class="d-flex justify-content-center mt-4">
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        )
    }
    return (
        <div className='row'>
            <div className='col-12 col-lg-6'>
            <img height='600px' src={admin} alt="" />
            </div>
            <div className='col-12 col-lg-6'>

            <h1 className='fw-bold' style={{marginTop:'150px' ,color:'#000088'}}>WellCome To DashBoard</h1>
            </div>
        </div>
    );
};

export default DashboardHome;