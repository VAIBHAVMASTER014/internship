import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// imported files
import Home from "./pages/Home/Home";
import Menu from "./pages/Menu/Menu";
import Cart from "./components/Cart/Cart";
import Brand from "./pages/Brand/Brand";
import RootLayout from "./components/RootLayout/RootLayout";
import PrivateRoutes from "./util/PrivateRoutes";
import Signup from "./pages/Signup/Signup";
import Login from "./pages/Login/Login";
import UpdateProfile from "./components/Navbar/UserProfile/UpdateForm";

// all routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "menu",
        element: <Menu />,
      },
      {
        path: "cart",
        element: (
          <PrivateRoutes>
            <Cart />
          </PrivateRoutes>
        ),
      },
      {
        path: "menu/brand/:id?/:category?",
        element: <Brand />,
      },
      {
        path: "signup",
        element: <Signup />,
      },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "editprofile",
        element: <UpdateProfile />,
      },
    ],
  },

  // {
  //   path: "/login",
  //   element: <Login />,
  // },
  // {
  //   path: "/registration",
  //   element: <Signup />,
  // },
]);

const App: React.FC = () => {
  return (
    <>
      <ToastContainer />
      <RouterProvider router={router} />
    </>
  );
};

export default App;
