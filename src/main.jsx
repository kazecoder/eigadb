import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Movie from "./pages/Movie.jsx";
import Tv from "./pages/Tv.jsx"
import "./index.css";
import { SearchProvider } from "./components/SearchContext";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import NavWrapper from "./components/NavWrapper.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <NavWrapper><Outlet/></NavWrapper>
    ),
    children:[
      {
        path:"/",
        element: <App/>
      },

      {
        path: "/movie/:movieId",
        element: <Movie />,
      },
      {
        path: "/tv/:tvId",
        element: <Tv />
      }
    ]
  },

]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <SearchProvider>
      <RouterProvider router={router} />
    </SearchProvider>
  </React.StrictMode>
);
