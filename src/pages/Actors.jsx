
import { API_KEY, IMAGE_URL } from "../api/requests";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Movies.css"

import axios from "../api/axios.js";

const Actors = () => {
  const [movieResult, setMovieResult] = useState([]);

  useEffect(() => {
    axios.get(`/trending/person/week?api_key=${API_KEY}`).then((response) => {
      setMovieResult(response.data);
    });
  }, []);

  return (
    <div className="movies-page">
      {
      movieResult.results?.map((item) => {
        return (
          <Link key={item.id} to={`/person/${item.id}`}>
            <div key={item.id}>
              <img
                className="movie-page"
                src={`${IMAGE_URL}${item.profile_path}`}
                alt={item.name || item.title}
              />
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default Actors;
