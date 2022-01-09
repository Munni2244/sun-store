import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Navigation from '../../Navigation/Navigation';
import './MoreProducts.css';
import AOS from 'aos';
import 'aos/dist/aos.css'; 
import useAuth from '../../../../Hooks/useAuth';
import Footer from '../../Footer/Footer';

const MoreProducts = () => {
    // const {loading}=useAuth();
    const [moreProducts, setMoreProducts]= useState([]);
   
    useEffect(()=>{
        fetch('https://blooming-meadow-50062.herokuapp.com/products')
        .then(res=> res.json())
        .then(data=>setMoreProducts(data))
        AOS.init();

    },[moreProducts])

    // if(loading){
    //     return(
    //         <div class="d-flex justify-content-center mt-4">
    //         <div class="spinner-border" role="status">
    //           <span class="visually-hidden">Loading...</span>
    //         </div>
    //       </div>
    //     )
    // }
    return (
        <div  >
            <Navigation></Navigation>
            <hr />
            <div className='container'>
            <div style={{marginTop:'50px'}} className='row'>
                <h1 className='text-center m-5 fw-bold'>More Products Here</h1>
                {
                    moreProducts?.map(products=>
                        <div data-aos="flip-up"    key={products._id} className='col-12 col-lg-3 col-md-6 moreProducts mb-5'>
                    <div className='product'> 
                        <img src={products.img} width="100%" height="260px" alt="" />
                        <div className='d-flex p-1'>
                       <div>
                       <h5 className='text-secondary'>{products.name}</h5>
                        <p className='fw-bold'>${products.price}</p>
                       </div>
                       <Link to={`/products/${products._id}`}>

                       <button  style={{border:'1px solid black' ,height:'35px', borderRadius:'20px',marginLeft:'40px'}} className='btn mt-2'>Buy Now</button>
                       </Link>
                      
                        </div>
                    </div>
                </div>
                        )
                }
                
               
            
            </div>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default MoreProducts;