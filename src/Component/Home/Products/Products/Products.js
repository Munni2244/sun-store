import React, { useEffect, useState } from 'react';
import { Link, Outlet } from 'react-router-dom';
import useAuth from '../../../../Hooks/useAuth';
import Navigation from '../../Navigation/Navigation';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Products = () => {
    const { loading } = useAuth();
    const [moreProducts, setMoreProducts] = useState([]);

    useEffect(() => {
        fetch('https://blooming-meadow-50062.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setMoreProducts(data))
        AOS.init();

    }, [moreProducts])

    if (loading) {
        return (
            <div class="d-flex justify-content-center mt-4">
                <div class="spinner-border" role="status">
                    <span class="visually-hidden">Loading...</span>
                </div>
            </div>
        )
    }
    return (
        <div  >

            <div className='container'>
            <h1 className='text-center m-5 fw-bold'> <span style={{color:'orange'}}>More </span>Products Here</h1>
                    <div className='d-flex justify-content-center catagory '>
                        <Link  to="women">Women</Link>
                        <Link to="man"> Men</Link>
                    </div>
             
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Products;