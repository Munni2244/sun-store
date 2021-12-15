import React from 'react';
import img from '../../../Images/img13.jpg'

const ManageProducts = () => {
    return (
        <div>
             <div className='container'>
            <div style={{marginTop:'50px'}} className='row'>
                <h1 className='text-center m-5 fw-bold'>More Products Here</h1>
                <div  className='col-12 col-lg-4 col-md-6  mb-5'>
                    <div style={{ backgroundColor:"#000066"}} className=' text-center text-light p-4'> 
                        <img src={img} width="260px" height="260px" alt="" />
                        <div className='d-flex '>
                       <div>
                       <h5 className='ms-1'>addidas</h5>
                      
                       </div>
                       <button style={{border:'1px solid white' ,height:'35px', borderRadius:'20px',marginLeft:'80px'}} className='btn  text-light mt-2'>Remove</button>
                        </div>
                    </div>
                </div>
                <div className='col-12 col-lg-4 col-md-6 moreProducts mb-5'>
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
                <div className='col-12 col-lg-4 col-md-6 moreProducts mb-5'>
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
        </div>
    );
};

export default ManageProducts;