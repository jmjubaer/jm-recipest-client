import React from "react";

const NewsLetter = () => {
  return (
    <div className="my-5 bg-image flex justify-center items-center min-h-screen rounded-3xl">
        <div className="text-white w-11/12 md:w-3/4 text-center">
          <h2 className="text-5xl">Subscribe To Our Newsletter</h2>
          <p className="my-5 text-lg">
              Subscribe To Our Newletter Subscribe now and receive weekly newsletter
              with recipes, new courses, interesting posts, popular recipes and much
              more!
          </p>
          <div className="flex justify-center w-11/12 mx-auto mt-10">
              <input className='p-3 text-black outline-0 w-3/4 rounded-l-3xl' type="search" placeholder='Search here' />
              <input className='p-3 rounded-r-3xl cursor-pointer w-1/4 btn_gradient' type="button" value="Search" />
          </div>
        </div>
    </div>
  );
};

export default NewsLetter;
