import React, { useEffect, useState } from 'react';
import './Exploremore.css';
import video1 from '../../../video/video.mp4';
import { Link } from 'react-router-dom';

const Exploremore = () => {
  
    return (
        <div>
            <div className='banner2 d-flex justify-content-center align-items-center text-light'>

                <div className='text-center'>
                    <h1> Stock Limited </h1>
                    <p>Shoes SeLL now up To 50% Discount, Order Now</p>
                   <Link to="moreProducts"> 
                   <button className=' btn text-light fw-bold'>Explore More Products</button>
                   </Link>
                </div>

            </div>
            <div className='d-flex justify-content-center '>
            <div style={{marginTop:'-150px' ,width:'72%',backgroundColor:'#E7E9EB', border:'1px solid gray'}}className='text-center shadow-lg  '>
                <video width="80%" height="500" controls>
                    <source src={video1} type="video/mp4"/>
                      
                        </video>
                        
                    </div>
            </div>
            </div>
            );
};

            export default Exploremore;