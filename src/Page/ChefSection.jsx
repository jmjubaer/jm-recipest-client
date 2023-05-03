import React from 'react';
import ChefCard from './ChefCard';

const ChefSection = ({chefData}) => {
    return (
        <div className="my-8">
            <div className="text-center mb-10 relative">
                <h2 className='text-4xl font-bold'>Our Chefs</h2>
                <p>Get access to thousands of recipes from famous chefs.</p>
                <div className="absolute w-28 h-1 bg-amber-500 left-1/2 -bottom-3 -translate-x-1/2"></div>
            </div>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {
                    chefData.map(chef => <ChefCard
                        key={chef.id}
                        chefInfo={chef}
                        ></ChefCard>)
                }
            </div>
        </div>
    );
};

export default ChefSection;