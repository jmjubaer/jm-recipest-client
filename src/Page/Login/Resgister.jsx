import React, { useContext, useState } from 'react';
import { Link, useLocation, useNavigate  } from 'react-router-dom';
import { FaEyeSlash,FaEye } from "react-icons/fa";
import { updateProfile } from 'firebase/auth';
import SocialLogin from './SocialLogin';
import { AuthContest } from '../../Provider/AuthProvider';

const Resgister = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from || "/";
    const [show,setShow] = useState(false);
    const [passErr,setPassErr] = useState("");
    const {createUser} = useContext(AuthContest);

    const handleCreateUser = event => {
        event.preventDefault();
        setPassErr("")
        const name = event.target.name.value;
        const photo = event.target.photoUrl.value;
        const email = event.target.email.value;
        const password = event.target.password.value;
        if(password.length < 6 ){
            setPassErr("password is less than 6 characters");
            return
        }
        createUser(email,password)
        .then(result => {
            const user = result.user;
            updateProfile(user, {
                displayName: name,
                photoURL: photo
            })
            navigate(from)
            event.target.reset();
        })
        .catch(err => {
            console.log(err.message);
        })
    }

    return (
    <div className="min-h-screen my-5 flex items-center justify-center">
        <div className="w-1/2 border-2 rounded-lg p-10">
            <h2 className="text-3xl text-center my-5">Create your account</h2>
            <form onSubmit={handleCreateUser}>
                <label className="block mt-5 text-xl" htmlFor="name">Name</label>
                <input required className="block border-b-2 outline-0 py-3 px-2 w-full" placeholder="Enter your Name" type="name" name="name" id="name" />

                <label className="block mt-5 text-xl" htmlFor="photoUrl">PhotoURL</label>
                <input required className="block border-b-2 outline-0 py-3 px-2 w-full" placeholder="Enter your PhotoUrl" type="text" name="photoUrl" id="photoUrl" />
                

                <label className="block mt-5 text-xl" htmlFor="email">Email</label>
                <input required className="block border-b-2 outline-0 py-3 px-2 w-full" placeholder="Enter your Email" type="email" name="email" id="email" />
                
                <label className="block mt-5 text-xl" htmlFor="password">Password</label>
                <div className="relative">
                    <input required className="block border-b-2 outline-0 py-3 px-2 w-full" placeholder="Enter your Password" type={show ? "text" : "password"} name="password" id="password" />
                    <span className='absolute text-2xl bottom-3 right-2 cursor-pointer' onClick={()=> setShow(!show)}>
                    {
                        show ? <FaEyeSlash /> : <FaEye/>
                    }
                        </span>
                </div>
                <Link to="/reset" className="text-info">Forgotten Password ?</Link>
                <span className='text-red-500'>{passErr}</span>
                <input className="btn w-full btn_gradient mt-8" type="submit" value="Sign Up" />
            </form>

            <div className="flex items-center gap-5 my-8">
                <div className="w-full h-px bg-gray-400"></div>
                <span className="leading-normal">or</span>
                <div className="w-full h-px bg-gray-400"></div>
            </div>

            <div className="text-white">
                    <SocialLogin from={from}></SocialLogin>
            </div>

            <div className="grid grid-cols-4 items-center gap-5 my-8">
                <div className="w-full h-px bg-gray-400"></div>
                <span className="leading-normal col-span-2 text-center">Already have any Account ?</span>
                <div className="w-full h-px bg-gray-400"></div>
            </div>
            <Link to="/login"><button className="btn mx-auto block w-1/2 rounded-3xl btn_gradient">Sign In</button></Link>
        </div>
    </div>
    );
};

export default Resgister;