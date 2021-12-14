import React from 'react';
import './Exploremore.css';
import video1 from '../../../video/video.mp4';

const Exploremore = () => {
    return (
        <div>
            <div className='banner2 d-flex justify-content-center align-items-center text-light'>

                <div className='text-center'>
                    <h1> Stock Limited </h1>
                    <p>Shoes SeLL now up To 50% Discount, Order Now</p>
                    <button className='btn text-light'>Explore More Products</button>
                </div>

            </div>
            <div className='d-flex justify-content-center '>
            <div style={{marginTop:'-150px' ,width:'72%'}}className='text-center bg-light shadow-lg '>
                <video width="80%" height="500" controls>
                    <source src={video1} type="video/mp4"/>
                      
                        </video>
                        
                    </div>
            </div>
            </div>
            );
};

            export default Exploremore;