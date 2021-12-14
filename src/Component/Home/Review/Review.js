import React from 'react';
import r1 from '../../../Images/bn3.jpg'

const Review = () => {
    return (
        <div style={{marginTop:'100px'}} id="carouselExampleCaptions" class="carousel slide " data-bs-ride="carousel">
        <div class="carousel-indicators">
          {/* <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button> */}
        </div>
        <div class="carousel-inner ">
          <div style={{height:'500px', backgroundColor:'#E7E9EB'}} class="carousel-item active text-center  ">
         
        <img style={{width:'300px', height:'300px', borderRadius:'90%'}} src={r1} alt="" />
            <div class="carousel-caption d-none d-md-block text-dark">
              <h5>First slide label</h5>
              <p>Some representative placeholder content for the first slide.</p>
            </div>
          </div>
          {/* <div  style={{height:'500px'}} class="carousel-item ">
          <img src={r1} alt="" />
            <div class="carousel-caption d-none d-md-block text-dark">
              <h5>Second slide label</h5>
              <p>Some representative placeholder content for the second slide.</p>
            </div>
          </div>
          <div  style={{height:'500px'}} class="carousel-item">
          <img src={r1} alt="" />
            <div class="carousel-caption d-none d-md-block text-dark">
              <h5>Third slide label</h5>
              <p>Some representative placeholder content for the third slide.</p>
            </div>
          </div> */}
        </div>
        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    );
};

export default Review;