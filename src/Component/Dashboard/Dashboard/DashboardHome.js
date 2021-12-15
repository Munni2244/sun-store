import React from 'react';
import admin from '../../../Images/admin.png'

const DashboardHome = () => {
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