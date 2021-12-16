import React from 'react';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import useAuth from '../../../Hooks/useAuth';
import review from '../../../Images/review.jpg'

const AddReviews = () => {
    const {user}=useAuth();
    const { register, handleSubmit } = useForm();

    const onSubmit = data => {
        data.name=`${user.displayName}`
        fetch('http://localhost:4000/addReview', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.acknowledged) {
                    Swal.fire(
                        'Good job!',
                        'Add Review Successfully!'
                    )

                }

                console.log(data);
            })
    };
    return (
        <div>

            <div className="row user">

                <div className='col-12 col-lg-6 '>
                    <img height='600px' src={review} alt="" />
                </div>

                <div className='col-12 col-lg-6'>
                    <div style={{ marginTop: '50px' }} className="col-12 col-lg-12 text-center">
                    <div className='text-center formStyle'>
                    <h1 className="mb-4 text-center fw-bold">Add Your Review</h1>
                    <form onSubmit={handleSubmit(onSubmit)}>
                                <input {...register("name")} placeholder=" Your Name" defaultValue={user.displayName} /> <br />
                                <input {...register("img")} placeholder="Your img" required /> <br />

                                <input type="text" {...register("message")} placeholder="Enter your message" /> <br />

                                <input type="number" {...register("rating",{ required: true, min: 1, max: 5 })} placeholder=" Rating (number 1 To 5)" /><br />
                                <input style={{backgroundColor:'#000066', width:'70%'}} className=' text-light' type="submit" />

                            </form>
                    </div>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default AddReviews;