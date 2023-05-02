import React from "react";
import Header from "./Page/Shared/Header";
import { Outlet, useNavigation } from "react-router-dom";
import Footer from "./Page/Shared/Footer";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import LoadingSpinner from "./Page/Shared/LoadingSpinner";

const App = () => {
  const navigation = useNavigation();
  if(navigation.state === "loading"){
    return <LoadingSpinner></LoadingSpinner>
  }
  return (
    <div className="jm_container">
      <Header></Header>
      <div className="min-h-[80vh]">
        <Outlet />
      </div>
      <Footer></Footer>
      <ToastContainer/>
    </div>
  );
};

export default App;
