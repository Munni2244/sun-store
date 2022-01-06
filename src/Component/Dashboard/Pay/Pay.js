import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { loadStripe } from '@stripe/stripe-js';
import CheckoutForm from './CheckoutForm';
import { Elements } from '@stripe/react-stripe-js';


const stripePromise = loadStripe('pk_test_51JwLKQDNWDDk5vuIttjmRFGJT04sQxsZviAaKcn379NyDoJBck5psuC2lkUWm9disr5BsH6lwNze0vp2qtcwMzrI00X7TzOlAP');

const Pay = () => {
    const { id } = useParams();
    const [payment, setPayment] = useState({});

    useEffect(() => {
        fetch(`http://localhost:4000/payment/${id}`)
            .then(res => res.json())
            .then(data => setPayment(data))
    }, [id])

    return (
        <div>
            <div className='text-center mt-3 mb-4'>
                <h3 className='fw-bold fw-bold'>{payment.name} Please Pay for {payment.title}!</h3>
                <h2 style={{}} className='fw-bold'>Pay: $ {payment.price}</h2>
            <span>-----------------------------------</span>
            </div>
            <div>
                {payment.price && <Elements stripe={stripePromise}>
                    <CheckoutForm payment={payment} />
                </Elements>}

            </div>
        </div>
    );
};

export default Pay;