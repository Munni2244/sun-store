import React, { useEffect, useState } from 'react';
import shoe1 from '../../../../Images/img1.jpg'
import shoe2 from '../../../../Images/img3.jpg'
import shoe3 from '../../../../Images/img4.jpg'
import shoe4 from '../../../../Images/img5.jpg'
import shoe5 from '../../../../Images/img18.jpg'
import './Products.css';
import { Link } from 'react-router-dom';

const HomeProducts = () => {
    const [homeProducts, setHomeProducts]= useState([]);

    useEffect(()=>{
        fetch('./FakeData.json')
        .then(res=> res.json())
        .then(data=>setHomeProducts(data))
    },[])
    return (
        <div style={{ marginTop: '100px' }} className='container'>
            <div className='row '>
                <h1 className='text-center mb-5'>Leatest Products</h1>
                <div style={{ border: 'none' }} className='card col-12 col-lg-6 col-md-6'>
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
                        <div style={{ border: 'none' }} className='card img-box col-12 col-lg-6 col-md-6'>
                        <img className='card-img' width="280px" height="300px" src={products?.img} alt="" />
                        <div className='card-img-overlay d-flex justify-content-center align-items-center'>
                           
                           <Link to={`/orderId/${products.id}`}>
                           <button  style={{ marginTop: '100px' }} className='btn  add-btn'>Add to cart</button>
                           </Link>
                        </div>
                        <h6 className='text-secondary'>{products.name}</h6>
                        <h4>{products.price}</h4>
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