import { useEffect, useState } from "react";
import axios from "../api/axios";
import "./Row.css";
import { Link } from "react-router-dom";

const baseURL = "https://image.tmdb.org/t/p/original";


const Row = ({ title, fetchUrl }) => {
  const [movieList, setMovieList] = useState([]);
  useEffect(() => {
    axios.get(fetchUrl).then((response) => {
      setMovieList(response.data.results);
    });
  }, []);


  return (
    <div>
      <h2>{title}</h2>
      <div className="movie-list">
        {movieList?.map((item) =>{


          let prefix;
          prefix =  item.media_type == "movie" ? "movie" : "tv";
          return (
          <Link key={item.id} to={`/${prefix}/${item.id}`}>
            <div key={item.id}>
              <img
                className="movie-poster-image"
                src={`${baseURL}${item.poster_path}`}
                alt={item.name || item.title}
              />
            </div>
          </Link>

          )})}
      </div>
    </div>
  );
};

export default Row;
