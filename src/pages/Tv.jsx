import { useParams } from "react-router-dom";
import { API_KEY, IMAGE_URL } from "../api/requests";
import { useState, useEffect } from "react";
import Crew from "../components/Crew.jsx";
import Production from "../components/Production.jsx";
import "./Movie.css";

import axios from "../api/axios.js";

const Tv = () => {
  const [movieResult, setMovieResult] = useState("");
  const params = useParams();

  useEffect(() => {
    axios.get(`/tv/${params.tvId}?api_key=${API_KEY}`).then((response) => {
      console.log(response.data);
      setMovieResult(response.data);
    });
  }, []);

  return (
    <>
      <div className="movie-layout">
      <img
        className="backdrop"
        src={`${IMAGE_URL}${movieResult.backdrop_path}`}
        alt=""
      />
      <div>
      <h1>{movieResult.name}</h1>
      <p>{movieResult.overview}</p>
      <h3>Genres</h3>
      <ul className="genres">{movieResult.genres?.map((item,index) => <li className="genre" key={index} ><p>{item.name}</p></li>)}</ul>
      </div>
      <Production production={movieResult} />
      <Crew id={params.tvId} type="tv" />
      </div>
    </>
  );
};

export default Tv;
