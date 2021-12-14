import React from 'react';
import shoe1 from '../../../../Images/img1.jpg'
import shoe2 from '../../../../Images/img3.jpg'
import shoe3 from '../../../../Images/img4.jpg'
import shoe4 from '../../../../Images/img5.jpg'
import shoe5 from '../../../../Images/img18.jpg'
import './Products.css';

const HomeProducts = () => {
    return (
        <div style={{ marginTop: '100px' }} className='container'>
            <div className='row '>
                <h1 className='text-center mb-5'>Leatest Products</h1>
                <div style={{ border: 'none' }} className='card col-12 col-lg-6 col-md-6'>
                    <img className='card-img' width="95%" height="600px" src={shoe5} alt="" />
                    <div className='card-img-overlay d-flex justify-content-center align-items-center'>
                        <div className='bot-shoes'>
                            <h1>Wide Bot Shoes</h1>
                            <h1 className='mt-3'>Get Up To 50% Discount</h1>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-lg-6 col-md-6'>
                    <div className='row'>
                        <div style={{ border: 'none' }} className='card img-box col-12 col-lg-6 col-md-6'>
                            <img className='card-img' width="280px" height="300px" src={shoe1} alt="" />
                            <div className='card-img-overlay d-flex justify-content-center align-items-center'>
                               
                                <button style={{ marginTop: '100px' }} className='btn  add-btn'>Add to cart</button>
                            </div>
                            <h6 className='text-secondary'>Addidas</h6>
                            <h4> $50</h4>
                        </div>
                        <div className='col-12 col-lg-6 col-md-6'>
                            <div className='ms-4'>
                                <img width="280px" height="300px" src={shoe4} alt="" />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default HomeProducts;