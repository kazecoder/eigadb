import { useParams } from "react-router-dom";
import { API_KEY } from "../api/requests";
import { useState,useEffect } from "react";
import axios from '../api/axios.js'

const Movie = () => {
  const [movieResult, setMovieResult] = useState("");
  const params = useParams();
  useEffect(() => {
    axios.get(`/movie/${params.movieId}?api_key=${API_KEY}`).then((response)=>{
      setMovieResult(response)});
  }, []);

  return (
    <>
      <h1>This is Movie Page</h1>
    </>
  );
};

export default Movie;
