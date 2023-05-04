import React, { useState } from "react";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Rating } from '@smastrom/react-rating'

import '@smastrom/react-rating/style.css'

import { addToCart } from "../fakedb/function";

const RecipeCard = ({ recipe }) => {
  const { cookingMethod, image, ingredients, rating, recipeName } = recipe;
  const [favorite,setFavorite] = useState(false); 
  const handleFavorite = () => {
    setFavorite(true);
    toast("Recipe add your favorite!");
    addToCart(recipe);
  }

  return (
      <div className="card mt-10 md:mt-0 card-compact border relative shadow-xl">
          <figure><img className="rounded-md m-5" src={image} alt="Shoes" /></figure>
          <div className="card-body block">
            <h2 className="text-center text-3xl my-3">{recipeName}</h2>
            <p className="text-xl"><span className="font-bold text-2xl">Cooking Method : </span>{cookingMethod}</p>
            <div className="">
            <span className="font-bold text-2xl my-3 block">Ingredients : </span>
              {
                ingredients.map((ingredient,idx) => <li className="text-lg" key={idx}>{ingredient}</li>)
              }
            </div>
            <div className="my-3 flex items-center gap-2">
              <span className="font-bold text-2xl">Rating: </span>
              <Rating
                  style={{ maxWidth: 150 }}
                  value={rating}
                  readOnly
                />
                <span className="text-xl">({rating})</span>
            </div>
            <button onClick={handleFavorite} disabled={favorite} className="absolute top-3 right-3">
              {
                favorite ? <FaHeart className={`text-4xl text-red-600 opacity-50 cursor-not-allowed` } /> : <FaRegHeart className={`text-4xl text-red-600` } />
              }
            </button>
          </div>
      </div>
  );
};

export default RecipeCard;
