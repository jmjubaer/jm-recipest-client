import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContest } from "../../Provider/AuthProvider";
import LoadingSpinner from "../Shared/LoadingSpinner";

const Profiles = () => {
  const { user,logout,loading } = useContext(AuthContest);
const navigate = useNavigate();
  const handleSignOut = () => {
    logout();
    navigate("/")
  }
  if(loading){
    return <LoadingSpinner/>
  }
return (
    <div className="min-h-screen flex items-center justify-center my-10 btn_gradient w-fit mx-auto p-10 rounded-3xl">
        <div className="text-center">
            <img className="w-60 mx-auto h-60 rounded-full object-cover" src={user?.photoURL} alt="" />
            <h2 className="text-4xl my-10">Name: {user?.displayName}</h2>
            <p className="text-2xl">Email: {user?.email}</p>
            <button onClick={handleSignOut} className="btn btn-info mt-5 w-1/2">Log out</button>
        </div>
    </div>
    );

};

export default Profiles;
