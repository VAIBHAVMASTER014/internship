import { createBrowserRouter,RouterProvider } from "react-router-dom";
import { useState, useEffect } from "react";

import Navbar from "./components/Nav/Navbar";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import NewPost from "./components/NewPost/NewPost";
import About from "./pages/About/About";
import Missing from "./pages/Missing/Missing";
import PostPage from "./pages/PostPage/PostPage";
import Home from "./pages/Home/Home";

const router = createBrowserRouter([{
  path: "/",
  element: <Home/>
},
{
  path: "/about",
  element: <About/>
},
{
  path: "/NewPost",
  element: <NewPost/>
},
{
  path: "/PostPage/:id",
  element: <PostPage/>
},
{
  path: "/jghgg",
  element: <Missing/>
}
]);
function App() {
  return (
    <div className="App">
      {/* <Navbar /> */}
      {/* <Header /> */}
      <RouterProvider router={router}/>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
