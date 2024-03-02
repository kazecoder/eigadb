import Row from "../components/Row";
import { requests } from "../api/requests";


const displays = [
  { title: "Suggestions", fetchUrl: requests.fetchNetflixOriginals },
  { title: "Trending", fetchUrl: requests.fetchTrending },
  { title: "Top Rated", fetchUrl: requests.fetchTopRated },
  { title: "Action Movies", fetchUrl: requests.fetchActionMovies },
  { title: "Comedy Movies", fetchUrl: requests.fetchComedyMovies },
  { title: "Horror Movies", fetchUrl: requests.fetchHorrorMovies },
  { title: "Romance Movies", fetchUrl: requests.fetchRomanceMovies },
  { title: "Documentaries", fetchUrl: requests.fetchDocumentaries },
];

const Home = () => {
  return (
    <div>
     {  displays.map((item,index) => (
            <Row key={index} title={item.title} fetchUrl={item.fetchUrl} />
          ))}
    </div>
  )
}

export default Home
