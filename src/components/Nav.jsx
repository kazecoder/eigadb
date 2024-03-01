import "./Nav.css";
import Search from "./Search";
import { Link } from "react-router-dom";
import { useSearchContext } from "./SearchContext";

const Nav = () => {

  const {setFlag} = useSearchContext();

  const handleHomeClick=()=>{
    setFlag(false);
  }

  return (
    <div className="navbar">
      <img
        className="logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/1920px-Logonetflix.png"
        alt="Logo"
      />

      <ul className="nav-links">
       <Link to='/' onClick={handleHomeClick}><li>Home</li></Link>
        <li>TV Shows</li>
        <li>Movies</li>
        <li>My Lists</li>
        <li>Popular</li>
      </ul>

      <div>
         <Search/>
      </div>
    </div>
  );
};

export default Nav;
