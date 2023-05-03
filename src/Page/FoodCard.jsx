import React from 'react';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

const FoodCard = ({food}) => {
    const {cookingMethod,image,rating,recipeName} = food;
    return (
        <div className="card bg-base-100 shadow-xl border">
            <LazyLoadImage
            className='h-56 w-full object-cover'
            src={image}
            effect='blur'
            />
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