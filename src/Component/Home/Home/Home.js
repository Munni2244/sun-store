import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import Banner from '../Banner/Banner';
import Contact from '../Contact/Contact';
import Exploremore from '../Exploremore/Exploremore';
import Footer from '../Footer/Footer';
import Navigation from '../Navigation/Navigation';
import Offer from '../Offers/Offer';
import HomeProducts from '../Products/HomeProducts/HomeProducts';
import Products from '../Products/Products/Products';
import Review from '../Review/Review';

const Home = () => {
const {loading}=useAuth();
    if(loading){
        return(
            <div class="d-flex justify-content-center mt-4">
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
        )
    }
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Offer></Offer>
            <HomeProducts></HomeProducts>
            <Exploremore></Exploremore>
            <Products></Products>
            <Review></Review>
            <Footer></Footer>
        </div>
    );
};

export default Home;