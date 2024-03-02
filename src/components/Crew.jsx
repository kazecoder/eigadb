import { useEffect, useState } from "react";
import axios from "../api/axios";
import { Link } from "react-router-dom";
import { API_KEY, IMAGE_URL } from "../api/requests";
import "./Crew.css";

const Crew = ({ id, type }) => {
  const [crew, setCrew] = useState([]);
  useEffect(() => {
    axios
      .get(
        `/${type == "movie" ? "movie" : "tv"}/${id}/credits?api_key=${API_KEY}`
      )
      .then((response) => {
        console.log(response.data);
        setCrew(response.data.cast);
      });
  }, []);

  return (
    <>
      <h3>Actors</h3>
      <div className="crews">
        {crew?.map((item, index) => {
          return (
            <>
              <Link key={item.id} to={`/person/${item.id}`}>
                <img
                  key={index}
                  className="crew"
                  src={`${IMAGE_URL}${item.profile_path}`}
                  alt={item.name}
                />
              </Link>
            </>
          );
        })}
      </div>
    </>
  );
};

export default Crew;
