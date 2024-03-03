import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
// imported files
import Home from "./pages/Home/Home";
import Menu from "./pages/Menu/Menu";
import Cart from "./components/Cart/Cart";
import Brand from "./pages/Brand/Brand";
import RootLayout from "./components/RootLayout/RootLayout";
// all routes
const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children:[
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/menu",
        element: <Menu />,
      },
      {
        path: "/cart",
        element: <Cart />,
      },
      {
        path: "/menu/brand",
        element: <Brand />,
      },
    ]
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
      <RouterProvider router={router} /> 
      
    </>
  );
};

export default App;
