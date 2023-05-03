import React, { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import { FaHeart, FaStopwatch } from "react-icons/fa";
import RecipeCard from "./RecipeCard";

const Recipes = () => {
  const { id } = useParams();
  const { recipes } = useLoaderData();
  const [chefData, setChefData] = useState([]);
  useEffect(() => {
    fetch(`https://asignment-10-server-jmjubaer.vercel.app/chefs/${id}`)
      .then((res) => res.json())
      .then((data) => setChefData(data));
  }, []);
  const {
    chefName,
    chefPicture,
    likes,
    numberOfRecipes,
    short_des,
    yearsOfExperience,
  } = chefData;
  // console.log(recipes);
  return (
    <div>
      <div className="">
        <div className="card card-side items-center bg-amber-500 bg-opacity-50 my-8 border shadow-xl">
          <figure>
            <img
              className="rounded-full shadow-md m-5"
              src={chefPicture}
              alt="Movie"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title text-2xl">{chefName}</h2>
            <p>{short_des}</p>
            <span>
              Experience: <FaStopwatch className="text-xl inline-block" />{" "}
              {yearsOfExperience} Years
            </span>
            <span>
              like : <FaHeart className="text-xl inline-block text-red-500" />{" "}
              {likes}
            </span>
            <p className="text-lg">Recipe : {numberOfRecipes}</p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-10 my-10">
        {recipes.map((recipe, idx) => (
          <RecipeCard key={idx} recipe={recipe}></RecipeCard>
        ))}
      </div>
    </div>
  );
};

export default Recipes;
