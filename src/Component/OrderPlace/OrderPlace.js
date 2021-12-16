import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAuth from '../../Hooks/useAuth';
import Navigation from '../Home/Navigation/Navigation';
import './OrderPlace.css'

const OrderPlace = () => {
    const {user}=useAuth();
    const {orderId}=useParams();
    const [orders, setOrders]=useState({});
    const { register, handleSubmit } = useForm();

   
    // get placeorders 
    useEffect(()=>{
        fetch(`http://localhost:4000/products/${orderId}`)
        .then(res=> res.json())
        .then(data=> setOrders(data))
    },[])

    //post order
    const onSubmit = data => {
        data.status = 'Pending';
        data.title = `${orders.name}`;
        data.price = `${orders.price}`;
        data.img = `${orders.img}`;
        data.name = `${user.displayName}`;
        data.email = `${user.email}`;
        fetch('http://localhost:4000/orders', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    Swal.fire(
                        'Good job!',
                        'Booking Successfully!'
                    )

                }

                console.log(data);
            })
    };
   

// console.log(orders._id);
    return (
       
       <div>
           <Navigation></Navigation>
            <div className='container mt-5'>
            <div className='row '>
              
                <div className='col-12 col-lg-8 col-md-8 mt-3'>
                    <div>
                        <img width="100%" height="500px" src={orders.img} alt="" />
                        <h2>{orders.name}</h2>
                        <h4 className='fw-bold'>${orders.price}</h4>
                        <p className='text-secondary fw-bold'>{orders.desc}</p>
                    </div>

                </div>
                <div className='col-12 col-lg-4 col-md-4'>
                    <div className='text-center formStyle'>
                    <h1 className="mb-4 text-center fw-bold">Order Submit</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                                <input {...register("name")} placeholder="Name" defaultValue={user ? user.displayName : ''} disabled /> <br />
                                <input {...register("email")} placeholder="email" defaultValue={user ? user.email : ''} disabled /> <br />

                                <input type="text" {...register("address")} placeholder="Address" /> <br />
                                <input type="date" {...register("date")} placeholder="date" /> <br />

                                <input type="number" {...register("number")} placeholder="Number" /> <br />
                                <input className='bg-dark text-light' type="submit" />

                            </form>
                    </div>

                </div>
            </div>
        </div>
       </div>
    );
};

export default OrderPlace;