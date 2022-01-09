import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import useAuth from '../../../Hooks/useAuth';

const ManShoes = () => {

    const [manShoes, setManShoes]= useState([]);

    useEffect(()=>{
        fetch('https://blooming-meadow-50062.herokuapp.com/products')
        .then(res=> res.json())
        .then(data=> setManShoes(data))
    },[manShoes])
    let allShoes= manShoes.filter(shoes=> shoes.gender==='male')

    

    return (
        <div>
            <div style={{ marginTop: '50px' }} className='row'>
                   
                   {
                       allShoes?.map(products =>
                           <div data-aos="flip-up" key={products._id} className='col-12 col-lg-3 col-md-6 moreProducts mb-5'>
                               <div className='product'>
                                   <img src={products.img} width="100%" height="260px" alt="" />
                                   <div className='d-flex ms-2'>
                                       <div>
                                           <h5 className='text-secondary'>{products.name}</h5>
                                           <p className='fw-bold'>${products.price}</p>
                                       </div>
                                       <Link to={`/products/${products._id}`}>

                                           <button style={{ border: '1px solid black', height: '35px', borderRadius: '20px', marginLeft: '30px' }} className='btn  mt-2'>Add to cart</button>
                                       </Link>

                                   </div>
                               </div>
                           </div>
                       )
                   }



               </div>
        </div>
    );
};

export default ManShoes;