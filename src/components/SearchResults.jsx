import { useSearchContext } from "./SearchContext";
import "./SearchResults.css";

const baseURL = "https://image.tmdb.org/t/p/original";

const SearchResults = () => {
  const { results } = useSearchContext();
  return (
    <div className="movie-search-list">
      {results?.map((item) => (
        <div key={item.id}>
          <img
            className="movie-poster-search-image"
            src={`${baseURL}${item.poster_path}`}
            alt={item.name || item.title}
          />
        </div>
      ))}
    </div>
  );
};

export default SearchResults;
