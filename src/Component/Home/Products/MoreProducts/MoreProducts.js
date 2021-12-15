import React from 'react';
import img from '../../../../Images/img15.jpg'
import Navigation from '../../Navigation/Navigation';
import './MoreProducts.css';

const MoreProducts = () => {

    return (
        <div style={{marginTop:'50px'}} className='container'>
            <Navigation></Navigation>
            <hr />
            <div className='row'>
                <h1 className='text-center m-5 fw-bold'>More Products Here</h1>
                <div className='col-12 col-lg-3 col-md-6 moreProducts mb-5'>
                    <div className='product'> 
                        <img src={img} width="260px" height="260px" alt="" />
                        <div className='d-flex '>
                       <div>
                       <h5 className='text-secondary'>addidas</h5>
                        <p className='fw-bold'>$56</p>
                       </div>
                       <button style={{border:'1px solid black' ,height:'35px', borderRadius:'20px',marginLeft:'80px'}} className='btn  mt-2'>Add to cart</button>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-lg-3 col-md-6 moreProducts mb-5'>
                    <div className='product'> 
                        <img src={img} width="260px" height="260px" alt="" />
                        <div className='d-flex '>
                       <div>
                       <h5 className='text-secondary'>addidas</h5>
                        <p className='fw-bold'>$56</p>
                       </div>
                       <button style={{border:'1px solid black' ,height:'35px', borderRadius:'20px',marginLeft:'80px'}} className='btn  mt-2'>Add to cart</button>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-lg-3 col-md-6 moreProducts mb-5'>
                    <div className='product'> 
                        <img src={img} width="260px" height="260px" alt="" />
                        <div className='d-flex '>
                       <div>
                       <h5 className='text-secondary'>addidas</h5>
                        <p className='fw-bold'>$56</p>
                       </div>
                       <button style={{border:'1px solid black' ,height:'35px', borderRadius:'20px',marginLeft:'80px'}} className='btn  mt-2'>Add to cart</button>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-lg-3 col-md-3 moreProducts mb-5'>
                    <div className='product'> 
                        <img src={img} width="260px" height="260px" alt="" />
                        <div className='d-flex '>
                       <div>
                       <h5 className='text-secondary'>addidas</h5>
                        <p className='fw-bold'>$56</p>
                       </div>
                       <button style={{border:'1px solid black' ,height:'35px', borderRadius:'20px',marginLeft:'80px'}} className='btn  mt-2'>Add to cart</button>
                        </div>
                    </div>
                </div>
            
            </div>
        </div>
    );
};

export default MoreProducts;