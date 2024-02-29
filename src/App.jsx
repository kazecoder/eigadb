import { requests } from "./api/requests";
import "./App.css";
import Row from "./components/Row";
import Nav from "./components/Nav";

import { useSearchContext } from "./components/SearchContext";
import SearchResults from "./components/SearchResults";

const displays = [
  { title: "NETFLIX ORIGINALS", fetchUrl: requests.fetchNetflixOriginals },
  { title: "Trending", fetchUrl: requests.fetchTrending },
  { title: "Top Rated", fetchUrl: requests.fetchTopRated },
  { title: "Action Movies", fetchUrl: requests.fetchActionMovies },
  { title: "Comedy Movies", fetchUrl: requests.fetchComedyMovies },
  { title: "Horror Movies", fetchUrl: requests.fetchHorrorMovies },
  { title: "Romance Movies", fetchUrl: requests.fetchRomanceMovies },
  { title: "Documentaries", fetchUrl: requests.fetchDocumentaries },
];

function App() {
  const { flag } = useSearchContext();

  return (
    <>

        <Nav />
        {!flag ? (
          displays.map((item,index) => (
            <Row key={index} title={item.title} fetchUrl={item.fetchUrl} />
          ))
        ) : (
          <SearchResults />
        )}
    </>
  );
}

export default App;
