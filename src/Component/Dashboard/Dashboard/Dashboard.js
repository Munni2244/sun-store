import React from 'react';
import {  Link, Outlet } from 'react-router-dom';
import MyOrders from '../Orders/MyOrders/MyOrders';
import './Dashboard.css';
const Dashboard = () => {
    return (
        
        <div>
          
        
            <div style={{height:'180px'}} className='bg-secondary text-light text-end'>
            <h1>Maria Munni</h1>
            </div>
            <div className='row'>
                <div className='col-12 col-lg-2 col-md-3 shadow-lg list'>
                    <div className=''>
                   
                        <Link to="/"><i class="fas fa-home"></i> Go Home</Link>
                        <Link to="myOrders"><i class="fas fa-luggage-cart"></i> My Orders</Link>
                        <Link to="review"><i class="fas fa-star"></i> Add Review</Link>
                        <Link to="pay"><i class="fab fa-amazon-pay"></i> Pay</Link>
                        <Link to="allOrders"><i class="fas fa-shopping-basket"></i> All Orders </Link>
                        <Link to="manageProducts"><i class="fab fa-product-hunt"></i> ManageProducts</Link>
                        <Link to="manageProducts"><i class="fas fa-user-cog"></i> Add Admin</Link>
                       
                    </div>

                </div>
               
                <div className='col-12 col-lg-9 col-md-9 items'>
             
                <Outlet />
                   

                </div>
            </div>
        </div>
    );
};

export default Dashboard;