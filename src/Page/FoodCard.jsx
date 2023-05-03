import React from 'react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'

const FoodCard = ({food}) => {
    const {cookingMethod,image,rating,recipeName} = food;
    return (
        <div className="card bg-base-100 shadow-xl border">
            <figure><img src={image} className='w-full h-56 object-cover' alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{recipeName}</h2>
                <p>Cooking Method : {cookingMethod}</p>
                <div className="flex justify-between">
                    <Rating
                    style={{ maxWidth: 100 }}
                    value={rating}
                    readOnly
                    />
                    <span className='px-2 py-1 text-white rounded-md bg-amber-500 block'>{rating}</span>
                </div>
            </div>
        </div>
    );
};

export default FoodCard;