import React, { useContext, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaBars } from 'react-icons/fa';
import { AuthContest } from '../../Provider/AuthProvider';
import { Tooltip } from 'react-tooltip'
import 'react-tooltip/dist/react-tooltip.css'

const Header = () => {
    const [open, setOpen] = useState(false);
    const {user,logout} = useContext(AuthContest);

    return (
        <div className='bg-gradient-to-t from-amber-400  p-4 rounded-b-3xl'>
            <nav className='flex lg:grid lg:grid-cols-5 justify-between jm_container items-center'>
                <h1 className='md:text-4xl text-2xl lg:col-span-2 '><Link to="/"><span className='font-serif text-4xl md:text-5xl text-amber-500 '>JM</span>_<span className='font-serif text-4xl md:text-5xl text-amber-500'>R</span>esipes
                <span className='font-serif text-4xl md:text-5xl text-amber-500'>t</span></Link></h1>

                <div className={`jm_nav ${open ? "w-4/5 md:w-1/2 p-5" : "w-0"}`}>
                    <ul className='flex flex-col lg:flex-row gap-y-3'>
                        <li><NavLink to="/" className={({ isActive }) => isActive ? "active" : "normal" }>Home</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? "active" : "normal" } to="/blogs">Blog</NavLink></li>
                        <li><NavLink className={({ isActive }) => isActive ? "active" : "normal" } to="/favorites">Favorite Recipe</NavLink></li>
                    </ul>
                    <div className="">
                    <Tooltip id='my-tooltip' />
                        {
                            user ?
                                <div className='lg:flex gap-5'>
                                <Link
                                  data-tooltip-id="my-tooltip" 
                                  data-tooltip-content={user?.displayName} 
                                  data-tooltip-place="top"
                                 to="/user"><img
                                  data-tooltip-id="my-tooltip" 
                                className='w-12 h-12 rounded-full mt-3 lg:mt-0' src={user?.photoURL} alt="" /></Link>
                                <button onClick={logout} className= 'btn bg-amber-500 border-none px-5 mt-5 lg:mt-0'>Log Out</button>
                                </div>
                                 :
                                <Link to="/login">
                                    <button className= 'btn bg-amber-500 border-none px-5 mt-10 lg:mt-0'>Login</button>
                                </Link>
                        }
                    </div>
                </div>
                <button onClick={() => setOpen(!open)} className='block lg:hidden'><FaBars className='mr-2 text-4xl' /></button>
            </nav>
        </div>
    );
};

export default Header;