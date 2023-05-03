import React from 'react';
import imag_1 from "../assets/image_1.jpg"
import imag_2 from "../assets/image_2.jpg"
import imag_3 from "../assets/iamge_3.jpg"
import imag_4 from "../assets/main-banner.jpg"
import { Link } from 'react-router-dom';

const Bannerr = () => {
    return (
        <div>
            <div className="my-5 relative">
                <div className="carousel w-full rounded-3xl h-screen lg:h-[500px] ">
                    <div id="slide1" className="carousel-item relative w-full">
                        <img src={imag_3} className="w-full object-cover" />
                        <div className="absolute flex md:justify-between transform -translate-y-1/2 md:left-5 md:right-5 md:top-1/2 top-10 right-5">
                        <a href="#slide3" className="btn btn-circle">❮</a> 
                        <a href="#slide2" className="btn btn-circle">❯</a>
                        </div>
                    </div> 
                    <div id="slide2" className="carousel-item relative w-full ">
                        <img src={imag_2} className="w-full object-cover" />
                        <div className="absolute flex md:justify-between transform -translate-y-1/2 md:left-5 md:right-5 md:top-1/2 top-10 right-5">
                        <a href="#slide1" className="btn btn-circle">❮</a> 
                        <a href="#slide3" className="btn btn-circle">❯</a>
                        </div>
                    </div> 
                    <div id="slide3" className="carousel-item relative w-full">
                        <img src={imag_1} className="w-full object-cover" />
                        <div className="absolute flex md:justify-between transform -translate-y-1/2 md:left-5 md:right-5 md:top-1/2 top-10 right-5">
                        <a href="#slide2" className="btn btn-circle">❮</a> 
                        <a href="#slide1" className="btn btn-circle">❯</a>
                        </div>
                    </div> 
                </div>
                    <div className="absolute w-11/12 md:w-2/3 text-center text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <h1 className='text-4xl md:text-5xl'>Well come in
                        <span className="text-3xl md:text-4xl ms-3 inline-block">
                            <Link to="/">
                            <span className="font-serif text-4xl md:text-5xl text-amber-500 ">JM</span>_
                            <span className="font-serif text-4xl md:text-5xl text-amber-500">R</span>esipes
                            <span className="font-serif text-4xl md:text-5xl text-amber-500">t</span>
                            </Link>
                        </span>
                        </h1>
                        <h2 className='text-4xl md:text-5xl my-5'>Search all of our Recipes Collection </h2>
                        <p>Find and share everyday cooking inspiration on Chefscuisine. Discover recipes, cooks, videos, and how-tos based on the food you love and the friends you follow.</p>
                        <div className="flex justify-center w-full my-5">
                            <input className='p-3 text-black outline-0 w-3/4 rounded-l-xl' type="search" placeholder='Search here' />
                            <input className='p-3 rounded-r-xl cursor-pointer w-1/4 btn_gradient' type="button" value="Search" />
                        </div>
                    </div>
            </div>
        </div>
    );
};

export default Bannerr;