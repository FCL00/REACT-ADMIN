import React from "react";
import Home from "src/pages/home/Home";
import Products from "src/pages/products/Products";
import Users from "src/pages/users/Users";
import Navbar from "src/components/navBar/Navbar";
import Menu from "src/components/menu/Menu";
import Footer from "src/components/footer/Footer";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";

const App = () => {
  const Layout = () => {
    return (
      <div className="main">
        <Navbar />
        <div className="main-container">
          <div className="menuContainer">
            <Menu />
          </div>
          <div className="contentContainer">
            <Outlet />
          </div>
        </div>
        <Footer />
      </div>
    );
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children: [
        { path: "/", element: <Home /> },
        { path: "/users", element: <Users /> },
        { path: "/products", element: <Products /> },
      ],
    },
  ]);

  return <RouterProvider router={router}></RouterProvider>;
};

export default App;
