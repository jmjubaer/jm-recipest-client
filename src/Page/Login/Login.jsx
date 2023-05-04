import React, { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { FaEyeSlash,FaEye } from "react-icons/fa";
import SocialLogin from "./SocialLogin";
import { AuthContest } from "../../Provider/AuthProvider";


const Login = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const from = location?.state?.from?.pathname || "/";
    const [show,setShow] = useState(false);
    const [err, setErr] = useState("");
    const {signIn} = useContext(AuthContest);

    const handleSign = (event) => {
        event.preventDefault();
        setErr("");
        const email = event.target.email.value;
        const password = event.target.password.value;
        signIn(email, password)
        .then(result => {
            const user = result.user;
            event.target.reset();
            navigate(from)
        })
        .catch(err => {
            setErr(err.message)
            console.log(err);
        })
    }
  return (
    <div className="min-h-screen my-5 flex items-center justify-center">
        <div className="w-1/2 border-2 rounded-lg p-10">
            <h2 className="text-3xl text-center my-5">Login your account</h2>
            <form onSubmit={handleSign}>
                <label className="block mt-5 text-xl" htmlFor="email">Email</label>
                <input required className="block border-b-2 outline-0 py-3 w-full" placeholder="Enter your Email" type="email" name="email" id="email" />
                <label className="block mt-5 text-xl" htmlFor="password">Password</label>
                <div className="relative">
                    <input required className="block border-b-2 outline-0 py-3 w-full" placeholder="Enter your Password" type={show ? "text" : "password"} name="password" id="password" />
                    <span className='absolute text-2xl bottom-3 right-2 cursor-pointer' onClick={()=> setShow(!show)}>
                    {
                        show ? <FaEyeSlash /> : <FaEye/>
                    }
                        </span>
                </div>
                <Link to="/reset" className="text-info">Forgotten Password ?</Link>
                <span className="text-red-500">{err}</span>
                <input className="btn w-full btn_gradient mt-8" type="submit" value="Login" />
            </form>

            <div className="flex items-center gap-5 my-8">
                <div className="w-full h-px bg-gray-400"></div>
                <span className="leading-normal">or</span>
                <div className="w-full h-px bg-gray-400"></div>
            </div>

            <div className="text-white">
                <SocialLogin from = {from}></SocialLogin>
            </div>

            <div className="grid grid-cols-4 items-center gap-5 my-8">
                <div className="w-full h-px bg-gray-400"></div>
                <span className="leading-normal col-span-2 text-center">Don't have any Account ?</span>
                <div className="w-full h-px bg-gray-400"></div>
            </div>
            <Link to="/register" state={{from:from}}><button className="btn mx-auto block w-1/2 rounded-3xl btn_gradient">Sign Up</button></Link>
        </div>
    </div>
  );
};

export default Login;
