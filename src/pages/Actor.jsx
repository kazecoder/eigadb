import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { API_KEY, IMAGE_URL } from "../api/requests";
import "./Actor.css";
import axios from "../api/axios.js";
import MovieCredits from "../components/MovieCredits.jsx";
import TvCredits from "../components/TvCredits.jsx";

const Actor = () => {
  const [movieResult, setMovieResult] = useState("");
  const params = useParams();

  useEffect(() => {
    axios
      .get(`/person/${params.actorId}?api_key=${API_KEY}`)
      .then((response) => {
        console.log(response.data);
        setMovieResult(response.data);
      });
  }, []);

  return (
    <>
      <div className="actor-layout">
        <div className="actor-card">
        <img
          className="profile"
          src={`${IMAGE_URL}${movieResult.profile_path}`}
          alt={movieResult.name}
        />
        </div>
        <div className="actor-details">
        <h1>{movieResult.name}</h1>
        <p>{movieResult.biography}</p>
        {movieResult.homepage && <p>Website: {movieResult.homepage}</p>} 
        {movieResult.popularity && <p>Popularity: {movieResult.popularity}</p>}
        
        </div>
        
        
        <MovieCredits />
        <TvCredits />
      </div>
    </>
  );
};

export default Actor;
