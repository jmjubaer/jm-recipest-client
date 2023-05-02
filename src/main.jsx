import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Page/Home";
import Login from "./Page/Login";
import Resgister from "./Page/Resgister";
import Recipes from "./Page/Recipes";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () => fetch('http://localhost:5000/chefs')
      },
      {
        path: "/recipes/:id",
        element: <Recipes/>,
        loader: ({params}) => fetch(`http://localhost:5000/recipes/${params.id}`)
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Resgister />,
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </React.StrictMode>
);
