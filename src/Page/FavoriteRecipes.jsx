import React from 'react';
import { FaTimes } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import { Rating } from '@smastrom/react-rating'
import '@smastrom/react-rating/style.css';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const FavoriteRecipes = () => {
    const recipes = useLoaderData();
    console.log(recipes);
    return (
        <div>
            {
                recipes.map((recipe,idx) => <FavoriteRecipeCard
                key={idx}
                recipe={recipe}
                ></FavoriteRecipeCard>)
            }
        </div>
    );
};

const FavoriteRecipeCard = ({recipe}) => {
    const {cookingMethod,image,rating,recipeName} = recipe;
    return (
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 border border-gray p-7 my-7 rounded-lg">
            <div className="w-60 h-60 rounded-lg bg-[#F4F4F4] p-5 flex justify-between items-center">
                <img className="object-contain " src={image} alt="" />
            </div>
            <div className="grow text-center md:text-left">
                <h2 className="text-3xl font-extrabold ">{recipeName}</h2>
                <h3 className="text-2xl mt-2 font-semibold">Cooking Method : {cookingMethod}</h3>
                <div className="my-3 flex items-center gap-2">
                    <span className="font-bold text-2xl">Rating: </span>
                    <Rating
                        style={{ maxWidth: 150 }}
                        value={rating}
                        readOnly
                        />
                    <span className="text-xl">({rating})</span>
                </div>
            </div>
            <button onClick={() => toast("This button not work yet. It work soon..")} className="">
            <FaTimes className='text-5xl text-red-600'/>
            </button>
        </div>
    )
}

export default FavoriteRecipes;