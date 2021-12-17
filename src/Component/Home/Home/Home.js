import React from 'react';
import Banner from '../Banner/Banner';
import Exploremore from '../Exploremore/Exploremore';
import Navigation from '../Navigation/Navigation';
import Offer from '../Offers/Offer';
import HomeProducts from '../Products/HomeProducts/HomeProducts';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Banner></Banner>
            <Offer></Offer>
            <HomeProducts></HomeProducts>
            <Exploremore></Exploremore>
            <Review></Review>

        </div>
    );
};

export default Home;