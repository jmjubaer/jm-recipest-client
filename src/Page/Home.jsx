import React from 'react';
import Bannerr from './Bannerr';
import { useLoaderData } from 'react-router-dom';
import ChefSection from './ChefSection';
import FoodGallery from './FoodGallery';
import NewsLetter from './NewsLetter';

const Home = () => {
    const chefData = useLoaderData();
    // console.log(chefData);
    return (
        <div>
            <Bannerr></Bannerr>
            <ChefSection chefData={chefData}></ChefSection>
            <FoodGallery></FoodGallery>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default Home;