import React from 'react';
import ChefCard from './ChefCard';

const ChefSection = ({chefData}) => {
    return (
        <div className='grid grid-cols-3 gap-5 my-8'>
            {
                chefData.map(chef => <ChefCard
                     key={chef.id}
                     chefInfo={chef}
                     ></ChefCard>)
            }
        </div>
    );
};

export default ChefSection;