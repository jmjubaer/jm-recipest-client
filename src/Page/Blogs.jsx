import React from 'react';

const Blogs = () => {
    return (
        <div className="my-10 rounded-3xl p-8 bg-gradient-to-t to-amber-400 from-amber-300">
            <div className="border shadow-2xl bg-amber-200 p-5 rounded-3xl">
                <h2 className='text-4xl'>Differences between uncontrolled and controlled components?</h2>
                <p className='text-xl mt-5'><span className='text-2xl font-extrabold'>Ans: </span></p>
            </div>


            <div className="border shadow-2xl bg-amber-200 p-5 rounded-3xl mt-8">
                <h2 className='text-4xl'>How to validate React props using PropTypes?</h2>
                <p className='text-xl mt-5'><span className='text-2xl font-extrabold'>Ans: </span></p>
            </div>

            <div className="border shadow-2xl bg-amber-200 p-5 rounded-3xl mt-8">
                <h2 className='text-4xl'>Difference between nodejs and express jsI?</h2>
                <p className='text-xl mt-5'><span className='text-2xl font-extrabold'>Ans: </span></p>
            </div>

            <div className="border shadow-2xl bg-amber-200 p-5 rounded-3xl mt-8">
                <h2 className='text-4xl mt-5'>What is a custom hook, and why will you create a custom hook?</h2>
                <p className='text-xl mt-5'><span className='text-2xl font-extrabold'>Ans: </span>A custom hook is a reusable function in React that encapsulates a specific piece of logic and can be use multiple components this logic. When we needed repeat any logic in multiple components. we can use custom hook. Custom hook name stat with use word and it use like normal hook. </p>
            </div>
        </div>
    );
};

export default Blogs;