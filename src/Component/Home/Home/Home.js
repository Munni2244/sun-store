import React from 'react';
import Banner from '../Banner/Banner';
import Exploremore from '../Exploremore/Exploremore';
import Offer from '../Offers/Offer';
import HomeProducts from '../Products/HomeProducts/HomeProducts';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <Offer></Offer>
            <HomeProducts></HomeProducts>
            <Review></Review>
            <Exploremore></Exploremore>
        </div>
    );
};

export default Home;