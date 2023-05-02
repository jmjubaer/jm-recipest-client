import React from "react";
import { FaHeart, FaStopwatch } from "react-icons/fa";
import { Link } from "react-router-dom";

const ChefCard = ({ chefInfo }) => {
  console.log(chefInfo);
  const {chefName,chefPicture,likes,numberOfRecipes,yearsOfExperience,id  } = chefInfo;
  return (
    <div className="card border border-amber-500 bg-base-100 shadow-xl overflow-hidden">
        <figure className="p-10">
            <img
            src={chefPicture}
            alt="Shoes"
            className="rounded-xl"
            />
        </figure>
        <div className="card-body absolute top-0 left-0 items-center justify-center w-full h-full bg-amber-600 bg-opacity-50 opacity-0 hover:opacity-100 transition-opacity ">
            <div className="w-full">
            <h2 className="text-3xl text-center mb-5">{chefName}!</h2>
            <div className=" my-3 flex justify-between">
                <span>Experience: <FaStopwatch className="text-xl inline-block"/> {yearsOfExperience} Years</span>
                <span><FaHeart className="text-xl inline-block text-red-500" />  {likes}</span>
            </div>
            <p className="text-lg">Recipe : {numberOfRecipes}</p>
            <div className="card-actions mt-10">
                <Link to={`/recipes/${id}`} className="block w-full">
                    <button className="btn btn_gradient w-full">View Recipes</button>
                </Link>
            </div>
            </div>
        </div>
    </div>
  );
};

export default ChefCard;
