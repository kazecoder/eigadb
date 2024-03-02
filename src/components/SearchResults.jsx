import { useSearchContext } from "./SearchContext";
import "./SearchResults.css";
import NoImage from "../assets/noimage.jpeg";
import { Link } from "react-router-dom";

const baseURL = "https://image.tmdb.org/t/p/original";

const SearchResults = () => {
  const { results, setFlag } = useSearchContext();

  const handleSubmit = () => {
    setFlag(false);
  };
  return (
    <div className="movie-search-list">
      {results?.map((item) => {
        let prefix;
        if (item.media_type == "person") {
          prefix = item.profile_path;
        } else {
          prefix = item.poster_path;
        }

        return (
          <Link
            onClick={handleSubmit}
            key={item.id}
            to={`/${item.media_type}/${item.id}`}
          >
            <div key={item.id}>
              <img
                className="movie-poster-search-image"
                src={prefix ? `${baseURL}${prefix}` : NoImage}
                alt={item.name || item.title}
              />
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default SearchResults;
