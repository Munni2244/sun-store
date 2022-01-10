import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import userEvent from '@testing-library/user-event';
import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { set } from 'react-hook-form';
import useAuth from '../../../Hooks/useAuth';

const CheckoutForm = ({ payment }) => {
    const { user } = useAuth();
    const { price, name ,_id} = payment;
    const [error, setError] = useState('');
    const stripe = useStripe();
    const elements = useElements();
    const [clientSecret, setClientSecret] = useState('');
    const [success, setSuccess] = useState('');
    const [process, setProcess] = useState(false);

    useEffect(() => {
        fetch('https://blooming-meadow-50062.herokuapp.com/create-payment-intent', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({ price })
        })
            .then(res => res.json())
            .then(data => setClientSecret(data.clientSecret))
    }, [price])
    
    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js has not loaded yet. Make sure to disable
            // form submission until Stripe.js has loaded.
            return;
        }
        setProcess(true)
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            setError(error.message)
            setSuccess('')
        } else {
            setError('');
            console.log('[PaymentMethod]', paymentMethod);
        }

        ///payment intent
      
          const {paymentIntent, error:intentError} = await stripe.confirmCardPayment(
            clientSecret,
            {
              payment_method: {
                card: card,
                billing_details: {
                    name: name,
                    email: user.email                 
                },
              },
            },
          );

        if (intentError) {
            setError(intentError.message)
            setSuccess('')
        } else {
            setError('');
            setSuccess("Your Payment Processed Successfully ! Thank You!")
            console.log(paymentIntent);
            setProcess(false)
            //save to database
            const payment={
                   amount: paymentIntent.amount,
                   created: paymentIntent.created,
                   last4: paymentIntent.last4,
                   transaction:paymentIntent.client_secret.slice('_secret')[0]
            }
            fetch(`https://blooming-meadow-50062.herokuapp.com/orders/${_id}`, {
                method:'PUT',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(payment)
            })
            .then(res=> res.json())
            .then(data=> console.log(data))

        }
    }
    return (
        <div className='mt-5 '>
            <form className='m-5' onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {

                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <div className='text-center mt-5'>
                    {process ? <div class="spinner-grow text-success" role="status">
                        <span class="visually-hidden">Loading...</span>
                    </div> :
                     <button style={{ border: '1px solid white', borderRadius: '20px', height: '40px', backgroundColor: "#000099", color: 'white' }} className='px-5 mt-4' type="submit" disabled={!stripe || success}>
                        Pay: ${price}
                    </button>}
                </div>
            </form>
            {
                error && <p className='text-center text-danger'>{error}</p>
            }
            {
                success && <p className='text-center text-success'>{success}</p>
            }


        </div>
    );
};

export default CheckoutForm;