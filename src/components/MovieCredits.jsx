import { useEffect, useState } from "react";
import axios from "../api/axios";
import { useParams } from "react-router-dom";
import { API_KEY, IMAGE_URL } from "../api/requests";
import { Link } from "react-router-dom";
import "./MovieCredits.css";

const MovieCredits = () => {
  const { actorId } = useParams();
  const [crew, setCrew] = useState([]);
  useEffect(() => {
    axios
      .get(`/person/${actorId}/movie_credits?api_key=${API_KEY}`)
      .then((response) => {
        console.log(response.data);
        setCrew(response.data.cast);
      });
  }, []);

  return (
    <>
      <h3>Movies</h3>
      <div className="movies">
        {crew?.map((item, index) => {
          return (
            <Link key={index} to={`/movie/${item.id}`}>
              <img
                key={index}
                className="movie"
                src={`${IMAGE_URL}${item.poster_path}`}
                alt={item.name}
              />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default MovieCredits;
