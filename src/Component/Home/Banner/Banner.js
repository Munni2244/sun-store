import React from 'react';
import bn1 from '../../../Images/bn1.jpg';
import bn2 from '../../../Images/bn6.jpg'
import bn3 from '../../../Images/br.jpg'
import bn4 from '../../../Images/bn8.jpg'
import bn5 from '../../../Images/bn3.jpg'

const Banner = () => {
    return (

        
     <div id="carouselExampleSlidesOnly" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src={bn1} style={{height:'520px'}} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img style={{height:'520px'}} src={bn2} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img style={{height:'520px'}} src={bn3} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img style={{height:'520px'}} src={bn4} className="d-block w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img style={{height:'520px'}} src={bn5} className="d-block w-100" alt="..."/>
    </div>
  </div>
</div>

    
    );
};

export default Banner;