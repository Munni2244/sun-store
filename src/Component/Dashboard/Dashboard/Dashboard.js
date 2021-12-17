import React from 'react';
import {  Link, Outlet } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import './Dashboard.css';
const Dashboard = () => {
    const {user, logOut, admin}=useAuth();
  
    return (
        
        <div>
          
        
            <div style={{height:'180px', backgroundColor:'#000066'}} className=' text-light  d-flex justify-content-end align-items-center '>
            <h1>{user?.displayName}</h1>
            <Link to="/home">
            <button style={{ border: '1px solid white', borderRadius: '20px', height: '40px' }} onClick={logOut} className='btn mx-3  text-light'><i className="fas fa-sign-out-alt me-2 text-light"></i> LogOut</button>
            </Link>
            </div>
            <div className='row'>
             
                <div className='col-12 col-lg-2 col-md-3 shadow-lg list'>
                    <div className=''>
                   
                        <Link to="/dashboard"><button style={{border:'1px solid black',borderRadius:'20px',padding:'3px', width:'90%', backgroundColor:"#000099"}} className='btn text-light'>Dashboard</button></Link>
                        <Link to="/"><i class="fas fa-home"></i> Go Home</Link>
                       { !admin?  <div>
                        <Link to="myOrders"><i class="fas fa-luggage-cart"></i> My Orders</Link>
                        <Link to="review"><i class="fas fa-star"></i> Add Review</Link>
                        <Link to="pay"><i class="fab fa-amazon-pay"></i> Pay</Link>
                       </div>:
                      <div>
                            <Link to="allOrders"><i class="fas fa-shopping-basket"></i> All Orders </Link>
                        <Link to="manageProducts"><i class="fab fa-product-hunt"></i> ManageProducts</Link>
                        <Link to="addProducts"><i class="fab fa-product-hunt"></i> Add Products</Link>
                        <Link to="addAdmin"><i class="fas fa-user-cog"></i> Add Admin</Link>
                      </div> }
                       
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