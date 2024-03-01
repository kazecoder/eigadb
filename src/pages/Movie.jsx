import { useParams } from "react-router-dom";
import { API_KEY } from "../api/requests";
import { useState,useEffect } from "react";
import Nav from "../components/Nav.jsx";
import axios from '../api/axios.js'
import SearchResults from "../components/SearchResults.jsx";
import { useSearchContext } from "../components/SearchContext";

const baseURL = "https://image.tmdb.org/t/p/original";

const Movie = () => {

  const [movieResult, setMovieResult] = useState("");
  const params = useParams();
  const { flag } = useSearchContext();
  useEffect(() => {
    axios.get(`/movie/${params.movieId}?api_key=${API_KEY}`).then((response)=>{
      setMovieResult(response.data)});
  }, []);

  return (
    <>
    <Nav/>
    {!flag ? (
      <img className ="backdrop" src={`${baseURL}${movieResult.backdrop_path}`} alt=""/>

      ) : (
        <SearchResults />
      )}
    </>
  );
};

export default Movie;
