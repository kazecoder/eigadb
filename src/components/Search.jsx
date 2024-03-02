
import "./Search.css";
import { API_KEY } from "../api/requests";
import axios from "../api/axios";
import { useSearchContext } from "./SearchContext";


const baseURL = "https://api.themoviedb.org/3/search/multi?";




const Search = () => {

  const {query,flag,results,setQuery,setFlag,setResults} = useSearchContext();

  const handleSubmit = () => {

    axios
  .get(`${baseURL}query=${query}&api_key=${API_KEY}`)
  .then((response) => {console.log(response.data)
  setResults(response.data.results);

});
      setFlag(!flag);

  };

  const cancelSearch = () =>{
    setFlag(!flag);
    setResults([]);
    setQuery('');


  }

  return (

    <div className="search-bar">

      <input
        className="search-input"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Enter Movie"
      />
      {!flag ? (
        <button className="search-button" onClick={handleSubmit}>
          Search
        </button>
      ) : (
        <button className="cancel-button" onClick={cancelSearch}>X</button>
      )}
    </div>
  );
};

export default Search;
