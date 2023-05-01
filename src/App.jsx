import React from "react";
import Header from "./Page/Shared/Header";
import { Outlet } from "react-router-dom";
import Footer from "./Page/Shared/Footer";

const App = () => {
  return (
    <div className="jm_container">
      <Header></Header>
      <div className="min-h-[80vh]">
        <Outlet />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default App;
