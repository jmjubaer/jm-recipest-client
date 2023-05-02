import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
const Navigation = () => {
    const [open, setOpen] = useState(false);
    return (
        <div className='bg-gradient-to-t from-amber-400  p-4 rounded-b-3xl'>
            <nav className='flex lg:grid lg:grid-cols-5 justify-between jm_container items-center'>
                <h1 className='text-4xl lg:col-span-2 '><Link to="/"><span className='font-serif text-5xl text-amber-500 '>JM</span>_<span className='font-serif text-5xl text-amber-500'>R</span>esipes
                <span className='font-serif text-5xl text-amber-500'>t</span></Link></h1>

                <div className={`jm_nav ${open ? "w-4/5 md:w-1/2 p-5" : "w-0"}`}>
                    <ul className='flex flex-col lg:flex-row gap-y-3'>
                        <li><NavLink to="/" className={({ isActive }) => isActive ? "active" : "normal" }>Home</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? "active" : "normal" } to="/blogs">Blog</NavLink></li>
                    </ul>
                    <Link to="/login">
                        <button className= 'btn bg-amber-500 border-none px-5 mt-10 lg:mt-0'>login</button>
                    </Link>
                </div>
                <button onClick={() => setOpen(!open)} className='block lg:hidden'><FaBars className='mr-2 text-4xl' /></button>
            </nav>
        </div>
    );
};

export default Navigation;