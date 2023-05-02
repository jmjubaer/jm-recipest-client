import React, { useState } from "react";
import Rating from "react-rating";
import { FaHeart, FaRegHeart, FaRegStar, FaStar } from "react-icons/fa";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RecipeCard = ({ recipe }) => {
  const { cookingMethod, image, ingredients, rating, recipeName } = recipe;
  const [favorite,setFavorite] = useState(false); 
  const handleFavorite = () => {
    setFavorite(true);
    toast("Recipe add your favorite!")
  }
  return (
      <div className="card card-compact border relative shadow-xl">
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
            <div className="my-3">
              <span className="font-bold text-2xl">Rating: </span>
            <Rating
                readonly
                placeholderRating={rating}
                emptySymbol={<FaRegStar className="text-yellow-400 text-lg"/>}
                placeholderSymbol={<FaStar className="text-yellow-400 text-lg"/>}
                fullSymbol={<FaStar className="text-yellow-40 text-lg"/>}
              />
            </div>
            <button onClick={handleFavorite} disabled={favorite} className="absolute top-5 right-5">
              {
                favorite ? <FaHeart className={`text-4xl text-red-600 opacity-50 cursor-not-allowed` } /> : <FaRegHeart className={`text-4xl text-red-600` } />
              }
            </button>
          </div>
      </div>
  );
};

export default RecipeCard;
