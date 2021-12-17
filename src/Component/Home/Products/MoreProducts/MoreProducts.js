import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import img from '../../../../Images/img15.jpg'
import Navigation from '../../Navigation/Navigation';
import './MoreProducts.css';

const MoreProducts = () => {
    const [moreProducts, setMoreProducts]= useState([]);

    useEffect(()=>{
        fetch('http://localhost:4000/products')
        .then(res=> res.json())
        .then(data=>setMoreProducts(data))
    },[])
    return (
        <div  >
            <Navigation></Navigation>
            <hr />
            <div className='container'>
            <div style={{marginTop:'50px'}} className='row'>
                <h1 className='text-center m-5 fw-bold'>More Products Here</h1>
                {
                    moreProducts?.map(products=>
                        <div  key={products._id} className='col-12 col-lg-3 col-md-6 moreProducts mb-5'>
                    <div className='product'> 
                        <img src={products.img} width="260px" height="260px" alt="" />
                        <div className='d-flex '>
                       <div>
                       <h5 className='text-secondary'>{products.name}</h5>
                        <p className='fw-bold'>${products.price}</p>
                       </div>
                       <Link to={`/products/${products._id}`}>

                       <button  style={{border:'1px solid black' ,height:'35px', borderRadius:'20px',marginLeft:'80px'}} className='btn  mt-2'>Add to cart</button>
                       </Link>
                      
                        </div>
                    </div>
                </div>
                        )
                }
                
               
            
            </div>
            </div>
        </div>
    );
};

export default MoreProducts;