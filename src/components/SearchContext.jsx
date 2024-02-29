import { createContext, useContext } from "react";
import { useState } from "react";

const SearchContext = createContext();

export const SearchProvider = ({ children }) => {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [flag, setFlag] = useState(false);

  return (
    <SearchContext.Provider
      value={{ query, setQuery, results, setResults, flag, setFlag }}
    >
      {children}
    </SearchContext.Provider>
  );
};

export const useSearchContext = () =>
{return useContext(SearchContext);}
