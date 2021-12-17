import React from 'react';
import { Link } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';
import img from '../../../Images/bm2.png'

const Navigation = () => {
  const { logOut, user } = useAuth();
  return (
    <div>
      <div className='text-center d-flex justify-content-center align-items-center m-2'>
        <img width="200px" height="100px" src={img} alt="" />
        <h2 style={{color:'orange'}} >Sun<span style={{color:'blue'}}>StoRe</span></h2>
      </div>
      <hr />
      <nav className="navbar navbar-expand-lg navbar-light ">

        <div className="container-fluid">
          {/* <Link to="/" className="navbar-brand fw-bold" ><h2 style={{color:'blue'}} >Sun<span style={{color:'orange'}}>StoRe</span></h2></Link> */}
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/home" className="nav-link active fw-bold" aria-current="page" ><h5>Home</h5></Link>
              </li>
              <li className="nav-item active">
                <Link to="/contact" className="nav-link active fw-bold "><h5>Contact</h5> </Link>
              </li>

            </ul>
            <form className="d-flex">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                
              <li className="nav-item">
                  <Link to="/cart" className="nav-link active"><h5><i className="fas fa-cart-plus"></i></h5></Link>
                </li>
                
                 <li className="nav-item active ">
                   <Link to="/dashboard" className="nav-link active"><h5>DashBoard</h5></Link>
                 </li>
                
               
                {
                  !user.email && <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item active">
                  <Link to="/register" className="nav-link active"><h5>Register </h5></Link>
                </li> 
                  <li className="nav-item active">
                    <Link to="/login" className="nav-link active"><h5>Login </h5></Link>
                  </li>
                  </ul>
                
                }
                 {
                  user?.email && <span className='mx-3'><h3>{user?.displayName}</h3></span>
                }

              </ul>

             {user.email &&  <button style={{ border: '1px solid blue', borderRadius: '20px', height: '40px' }} onClick={logOut} className='btn'><i className="fas fa-sign-out-alt me-2"></i> LogOut</button>}
            </form>
          </div>
        </div>

      </nav>
    </div>
  );
};

export default Navigation;