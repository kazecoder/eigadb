import { useEffect, useState } from "react";
import axios from "../api/axios";
import "./Row.css"

const baseURL = "https://image.tmdb.org/t/p/original";

const Row = ({title,fetchUrl}) => {
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
      {movieList?.map((item) => (
        <div key={item.id}>
          <img className="movie-poster-image"src={`${baseURL}${item.poster_path}`} alt={item.name || item.title}
          />
        </div>
      ))}
    </div>
    </div>


  );
};

export default Row;
