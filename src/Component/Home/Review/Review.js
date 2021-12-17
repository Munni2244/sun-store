import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';

const Review = () => {
  const [reviews, setReviews]= useState([]);

  useEffect(()=>{
      fetch('http://localhost:4000/reviews')
      .then(res=> res.json())
      .then(data=>setReviews(data))
  },[])
    return (
      <div style={{ marginTop: '100px' }} className="container text-center">
      <h1>All <span style={{color:'rgb(250, 117, 139)'}}>ReViEwS</span></h1>
      <div className="row ms-5">
          {
              reviews.map(review => (
                  <div key={review._id} style={{ width: '250px' }} className="col-12 col-lg-3 col-md-6 text-center ">
                      <div style={{ height:'350px'}} className=" p-4">
                      <div className="ms-2">
                          <img className="rounded-circle" width="100px" height="100px" src={review.img} alt="" />
                          <h4 style={{ color: 'rgb(250, 117, 139)' }}>{review.name}</h4>

                      </div>
                      <p className="text-secondary"><small>{review.message}</small></p>
                      <Rating
                      className="text-warning"
                      initialRating={review.rating}
                       emptySymbol="far fa-star"
                          fullSymbol="fas fa-star"
                          readonly
                      />
                      </div>
                  </div>
              ))
          }
      </div>
  </div>
    );
};

export default Review;