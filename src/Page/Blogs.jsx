import React from 'react';
import { FaPrint } from "react-icons/fa";
import ReactToPdf from "react-to-pdf";
const ref = React.createRef();
const options = {
    // orientation: 'landscape',
    unit: 'in',
    format: [20,20]
};
const Blogs = () => {
    return (
        <div className='my-10 mt-20 relative'>
            <ReactToPdf options={options} targetRef={ref} filename="div-blue.pdf">
                {({toPdf}) => (
                    <button onClick={toPdf} className='text-4xl absolute -top-12 right-0 rounded-lg bg-amber-400 py-2 px-20'><FaPrint/></button>
                )}
            </ReactToPdf>
 
        {/* <Pdf options={options} targetRef={ref} filename="code-example.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
      </Pdf> */}
        <div ref={ref} className=" rounded-tr-none rounded-3xl p-8 bg-gradient-to-t to-amber-400 from-amber-300">
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
        </div>
    );
};

export default Blogs;