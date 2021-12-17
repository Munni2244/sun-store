import React, { useEffect, useState } from 'react';
import shoe5 from '../../../../Images/img18.jpg'
import './Products.css';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import useAuth from '../../../../Hooks/useAuth';

const HomeProducts = () => {
    const {loading}=useAuth();
    const [homeProducts, setHomeProducts]= useState([]);

    useEffect(()=>{
        fetch('https://blooming-meadow-50062.herokuapp.com/products')
        .then(res=> res.json())
        .then(data=>setHomeProducts(data))
        AOS.init();

    },[homeProducts])

    if(loading){
        return(
            <div class="d-flex justify-content-center mt-4">
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        )
    }
    return (
        <div style={{ marginTop: '100px' }} className='container'>
            <div className='row '>
                <h1 data-aos="zoom-in" className='text-center mb-5'>Leatest Products</h1>
                <div data-aos="flip-right"  style={{ border: 'none' }} className='card col-12 col-lg-6 col-md-6'>
                    <img className='card-img' width="95%" height="700px" src={shoe5} alt="" />
                    <div className='card-img-overlay d-flex justify-content-center align-items-center'>
                        <div className='bot-shoes'>
                            <h1>Wide Bot Shoes</h1>
                            <h1 className='mt-3'>Get Up To 50% Discount</h1>
                        </div>
                    </div>
                </div>
              
                <div className='col-12 col-lg-6 col-md-6'>
                    <div className='row'>
                    {
                    homeProducts?.slice(0,4).map(products=> 
                        <div data-aos="flip-left"  key={products._id} style={{ border: 'none' }} className='card img-box col-12 col-lg-6 col-md-6'>
                        <img className='card-img' width="280px" height="300px" src={products?.img} alt="" />
                        <div className='card-img-overlay d-flex justify-content-center align-items-center'>
                           
                           <Link to={`/products/${products._id}`}>
                           <button  style={{ marginTop: '100px' }} className='btn  add-btn'>Add to cart</button>
                           </Link>
                        </div>
                        <h5 className='text-secondary'>{products.name}</h5>
                        <h6 className='fw-bold'>${products.price}</h6>
                    </div>
                        )
                }
                       
                   
                    </div>

                </div>
            </div>
        </div>
    );
};

export default HomeProducts;