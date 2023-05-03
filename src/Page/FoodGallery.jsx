import React, { useEffect, useState } from 'react';
import FoodCard from './FoodCard';

const FoodGallery = () => {
    const [foods,setFoods] = useState([]);
    useEffect(()=> {
        fetch('https://asignment-10-server-jmjubaer.vercel.app/foods')
        .then(res => res.json())
        .then(data =>  setFoods(data))
    },[])
    console.log(foods);
    return (
        <div>
            <div className="text-center mb-10 relative">
                <h2 className='text-4xl font-bold'>Most Popular Recipes</h2>
                <p>Browse through our most popular recipes</p>
                <div className="absolute w-28 h-1 bg-amber-500 left-1/2 -bottom-3 -translate-x-1/2"></div>
            </div>
            <div className="grid grid-cols-4 gap-5 my-8">
                {
                    foods.map((food,idx) => <FoodCard key={idx} food = {food}></FoodCard>)
                }
            </div>
        </div>
    );
};

export default FoodGallery;