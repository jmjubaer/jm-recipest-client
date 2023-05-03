import React from 'react';
import Bannerr from './Bannerr';
import { useLoaderData } from 'react-router-dom';
import ChefSection from './ChefSection';

const Home = () => {
    const chefData = useLoaderData();
    // console.log(chefData);
    return (
        <div>
            <Bannerr></Bannerr>
            <ChefSection chefData={chefData}></ChefSection>
        </div>
    );
};

export default Home;