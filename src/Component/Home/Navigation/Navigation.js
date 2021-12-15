import React from 'react';
import { Link } from 'react-router-dom';
import img from '../../../Images/bm2.png'

const Navigation = () => {
  return (
    <div>
      <div className='text-center d-flex justify-content-center align-items-center m-2'>
        <img width="200px" height="100px" src={img} alt="" />
        <h2>AdDiDaS</h2>
      </div>
      <hr />
      <nav className="navbar navbar-expand-lg navbar-light ">

        <div className="container-fluid">
          <Link to="/" className="navbar-brand" >SuNStoRe</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="home" className="nav-link active" aria-current="page" >Home</Link>
              </li>
              <li className="nav-item active">
                <Link to="contact" className="nav-link">Contact</Link>
              </li>

            </ul>
            <form className="d-flex">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">

                <li className="nav-item active ">
                  <Link to="dashboard" className="nav-link active"><h5>DashBoard</h5></Link>
                </li>

                <li className="nav-item">
                  <Link to="cart" className="nav-link active"><h5><i className="fas fa-cart-plus"></i></h5></Link>
                </li>

                <li className="nav-item active">
                  <Link to="login" className="nav-link active"><h5><i className="fas fa-user-alt mx-2"></i></h5></Link>
                </li>

                <li className="nav-item active">
                  <Link to="logout" className="nav-link active"><h5><i className="fas fa-sign-out-alt me-2"></i></h5></Link>
                </li>


              </ul>


            </form>
          </div>
        </div>

      </nav>
    </div>
  );
};

export default Navigation;