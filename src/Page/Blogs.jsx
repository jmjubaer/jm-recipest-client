import React from 'react';
import { FaPrint } from "react-icons/fa";
import ReactToPdf from "react-to-pdf";
const ref = React.createRef();
const options = {
    orientation: 'landscape',
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
                <p className='text-xl mt-5'><span className='text-2xl font-extrabold'>Ans: </span>The main differences between uncontrolled and controlled components in their functionality, variability. Uncontrolled components refer to those components that operate without any external control or regulation. This components manage their own state internally. On the other hand the control components are operate under the supervision of an external controller or regulator. </p>
            </div>


            <div className="border shadow-2xl bg-amber-200 p-5 rounded-3xl mt-8">
                <h2 className='text-4xl'>How to validate React props using PropTypes?</h2>
                <p className='text-xl mt-5'><span className='text-2xl font-extrabold'>Ans:  
                </span> There has some steps to validate React props using PropTypes.
                    <li>Import PropTypes from the 'prop-types' package</li>
                    <li>Define the expected props and their data types in the component</li>
                    <li>Use the defined PropTypes in the component</li>

                </p>
            </div>

            <div className="border shadow-2xl bg-amber-200 p-5 rounded-3xl mt-8">
                <h2 className='text-4xl'>Difference between node js and express js?</h2>
                <p className='text-xl mt-5'><span className='text-2xl font-extrabold'>Ans: </span>Node.js is a server-side runtime environment that allows you to run JavaScript code outside the web browser, on the other hand Express.js is a lightweight and flexible web application framework that runs base on Node.js. Node.js provides a low-level API for interacting with system resources, while Express.js provides a higher-level API for building web servers and handling HTTP requests.</p>
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