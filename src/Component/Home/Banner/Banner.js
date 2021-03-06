import React from 'react';
import bn1 from '../../../Images/bn1.jpg';
import bn2 from '../../../Images/bn6.jpg'
import bn3 from '../../../Images/bn2.jpg'
import bn4 from '../../../Images/bn8.jpg'
import bn5 from '../../../Images/bn3.jpg'

const Banner = () => {
    return (

      <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="3" aria-label="Slide 4"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="4" aria-label="Slide 5"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
    <img style={{height:'520px'}} src={bn2} className="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
    <img style={{height:'520px'}} src={bn3} className="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
    <img style={{height:'520px'}} src={bn5} className="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
    <img style={{height:'520px'}} src={bn1} className="d-block w-100" alt="..."/>
    </div>
    <div class="carousel-item">
    <img style={{height:'520px'}} src={bn4} className="d-block w-100" alt="..."/>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>


    
    );
};

export default Banner;