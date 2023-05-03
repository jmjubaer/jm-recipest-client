import React from 'react';
import Bannerr from './Bannerr';
import { useLoaderData } from 'react-router-dom';
import ChefSection from './ChefSection';
import FoodGallery from './FoodGallery';

const Home = () => {
    const chefData = useLoaderData();
    // console.log(chefData);
    return (
        <div>
            <Bannerr></Bannerr>
            <ChefSection chefData={chefData}></ChefSection>
            <FoodGallery></FoodGallery>
        </div>
    );
};

export default Home;