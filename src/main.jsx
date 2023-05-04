import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./Page/Home";
import Recipes from "./Page/Recipes";
import NotFound from "./Page/Shared/NotFound";
import Blogs from "./Page/Blogs";
import AuthProvider from "./Provider/AuthProvider";
import PrivetRoutes from "./Page/PrivetRoutes";
import { getStoredRecipes } from "./fakedb/function";
import FavoriteRecipes from "./Page/FavoriteRecipes";
import Login from "./Page/Login/Login";
import Resgister from "./Page/Login/Resgister";
import Profiles from "./Page/Login/Profiles";
import ForgottenPass from "./Page/Login/ForgottenPass";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App></App>,
    errorElement: <NotFound></NotFound>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
        loader: () =>
          fetch("https://asignment-10-server-jmjubaer.vercel.app/chefs"),
      },
      {
        path: "/recipes/:id",
        element: <PrivetRoutes><Recipes /></PrivetRoutes>,
        loader: ({ params }) =>
          fetch(
            `https://asignment-10-server-jmjubaer.vercel.app/recipes/${params.id}`
          ),
      },
      {
        path: "/blogs",
        element: <Blogs />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/user",
        element: <Profiles />,
      },
      {
        path: "/register",
        element: <Resgister />,
      },
      {
        path: "/reset",
        element: <ForgottenPass />,
      },
      {
        path: "/favorites",
        element: <FavoriteRecipes />,
        loader: () => getStoredRecipes()
      },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);
