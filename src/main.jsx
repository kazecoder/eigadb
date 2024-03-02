import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Movies from "./pages/Movies.jsx";
import Movie from "./pages/Movie.jsx";
import Actors from "./pages/Actors.jsx";
import Series from "./pages/Series.jsx";
import Tv from "./pages/Tv.jsx"
import "./index.css";
import { SearchProvider } from "./components/SearchContext";
import { createBrowserRouter, RouterProvider,Outlet } from "react-router-dom";
import NavWrapper from "./components/NavWrapper.jsx";
import Actor from "./pages/Actor.jsx";

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
        path:"/movie",
        element:<Movies/>
      },

      {
        path: "/movie/:movieId",
        element: <Movie />,
      },
      {
        path: "/tv/:tvId",
        element: <Tv />
      },
      {
        path:"/tv",
        element:<Series/>
      },
      {
        path: "/person/:actorId",
        element: <Actor/>
      },
      {
        path: "/person",
        element:<Actors/>
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
