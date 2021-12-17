import React from 'react';
import './Footer.css'
const Footer = () => {
    return (
        <div style={{marginTop:' 150px'}}>
            <div className='bg-dark'>
                
     <div className="row  mx-4">
        <div className="col-12 col-lg-9  mt-5">
          <div className=" honda-footer d-flex">
          <h5 className=""><a href="">DownloadNow </a></h5>
          <h5 className="mx-5"><a href=""> License</a></h5>
        </div>
          <div className=" row honda-footer ">
            <div className="col-12 col-lg-1 col-md-4">
          <h6><a href="">About</a></h6></div>
          <div className="col-12 col-lg-1 col-md-4"><h6 className="mx-"><a href="">Features</a></h6></div>
          <div className="col-12 col-lg-1 col-md-4"><h6><a href="">Pricing</a></h6></div>
            <div className="col-12 col-lg-1 col-md-4"> <h6 className="mx-"><a href="">Careers</a></h6></div>
            <div className="col-12 col-lg-1 col-md-4"><h6><a href="">Help</a></h6></div>
            <div className="col-12 col-lg-2 col-md-4"><h6><a href="">Privacy Policy</a></h6></div>
        
      </div>
        <h2 className='text-light'>Call Now: +88001122336</h2>
        </div>
        <div className="col-12 col-lg-3 text-light my-5">
          <h5> Get The App</h5>
          <div className="d-flex border footer-icon">
            <div style={{fontSize: '40px'}}><i className="fab fa-apple link-danger  ms-2"></i></div>
            <div className='text-light'>
              <p><small>Downloaded on the</small> </p>
              <h5>App Store</h5>
          </div>
          </div>
          <div className="d-flex border  mt-3 mb-3 footer-icon">
            <div style={{fontSize: '40px'}}><i className="fab fa-google-play link-info ms-2"></i></div>
            <div className='text-light'>
              <p><small>Downloaded on the</small> </p>
              <h5>Google Play</h5>
          </div>
          </div>
        </div>
        <footer className='text-light text-center'>©Copyright 2021 12December SunStore proggress</footer>
        </div>
       
            </div>
      </div>
    
    );
};

export default Footer;