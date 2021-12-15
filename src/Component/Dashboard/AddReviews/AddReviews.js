import React from 'react';
import review from '../../../Images/review.jpg'

const AddReviews = () => {

    return (
        <div>

            <div className="row user">

                <div className='col-12 col-lg-6 '>
                    <img height='600px' src={review} alt="" />
                </div>

                <div className='col-12 col-lg-6'>
                    <div style={{ marginTop: '50px' }} className="col-12 col-lg-12 text-center">
                        <h1 className="mb-4">Give Your Reviews</h1>
                        <form >

                            <div >
                                <input name="image" type="url" style={{ width: '85%' }} className="mb-1 p-2 rounded-pill  field" placeholder=" Your Image" />
                            </div>

                            <br />
                            <div >
                                <input name="name" type="text" style={{ width: '85%' }} className="mb-1 p-2 rounded-pill  field" placeholder=" Your Name" />
                            </div>

                            <br />
                            <div >
                                <input name="description" type="text" style={{ width: '85%' }} className="mb-1 p-2 rounded-pill  field" placeholder=" message" />
                            </div>

                            <br />
                            <div >
                                <input name="rating" type="number" style={{ width: '85%' }} className="mb-2 p-2 rounded-pill  field" placeholder=" Your Rating" />
                            </div>

                            <br />
                            <button type="submit" style={{ width: '55%', backgroundColor: '#000066' }} className=" p-2 text-light  rounded-pill mb-3">Submit</button>
                            <div>

                            </div>
                        </form>
                    </div>

                </div>

            </div>
        </div>
    );
};

export default AddReviews;