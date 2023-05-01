import React from "react";
import Header from "./Page/Shared/Header";
import { Outlet } from "react-router-dom";
import Footer from "./Page/Shared/Footer";

const App = () => {
  return (
    <div className="jm_container">
      <Header></Header>
        <Outlet />
      <Footer></Footer>
    </div>
  );
};

export default App;
