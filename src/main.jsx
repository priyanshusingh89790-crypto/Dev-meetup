import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
} from "react-router-dom";
import "./index.css";
import Header from "./components/Header";
import Frontpage from "./components/Frontpage";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Forgotpass from "./components/Forgotpass";
import About from "./components/About/About";
import Last from "./components/Last";
const Layout = () => {
  return (
    <div>
      <Header />
      <Outlet />
    <Last/>
    </div>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Frontpage /> },
      { path: "/", element: <Frontpage /> },
      {path:"/about",
      element:<About/>},
     
    ],
    
  },
  {path:"/login",
    element:<Login/>},
    {path:"/signup",
    element:<Signup/>},
    {path:"/forgotpass",
    element:<Forgotpass/>},
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
