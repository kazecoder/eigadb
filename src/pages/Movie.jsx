import { useParams } from "react-router-dom";
import { API_KEY } from "../api/requests";
import { useState,useEffect } from "react";

import axios from '../api/axios.js'


const baseURL = "https://image.tmdb.org/t/p/original";

const Movie = () => {

  const [movieResult, setMovieResult] = useState("");
  const params = useParams();

  useEffect(() => {
    axios.get(`/movie/${params.movieId}?api_key=${API_KEY}`).then((response)=>{
      setMovieResult(response.data)});
  }, []);

  return (
    <>
      <img className ="backdrop" src={`${baseURL}${movieResult.backdrop_path}`} alt=""/>
    </>
  );
};

export default Movie;
