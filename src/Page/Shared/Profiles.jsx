import React, { useContext } from "react";
import { AuthContext } from "../provider/UserContext";
import { useNavigate } from "react-router-dom";
import LoadingSpinner from "./LoadingSpinner";

const Profiles = () => {
  const { user,signOutUser,loading } = useContext(AuthContext);
//   const { displayName, email, photoURL } = user;
const navigate = useNavigate();
  const handleSignOut = () => {
    signOutUser();
    navigate("/")
  }
  if(loading){
    return <LoadingSpinner/>
  }
return (
    <div className="min-h-screen flex items-center justify-center">
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
