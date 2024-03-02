import "./Nav.css";
import Search from "./Search";
import { Link } from "react-router-dom";
import Logo from "../assets/logo.png"
import { useSearchContext } from "./SearchContext";

const Nav = () => {

  const {setFlag} = useSearchContext();

  const handleHomeClick=()=>{
    setFlag(false);
  }

  return (
    <div className="navbar">
      <Link to='/' onClick={handleHomeClick}>
      <img
        className="logo"
        src={Logo}
        alt="Logo"
      />
      </Link>

      <ul className="nav-links">
       <Link to='/' onClick={handleHomeClick}><li>Home</li></Link>
       <Link to='/tv' onClick={handleHomeClick}><li>TV Shows</li></Link>
       <Link to='/movie' onClick={handleHomeClick}> <li>Movies</li></Link>
       <Link to='/person' onClick={handleHomeClick}> <li>Actors</li></Link>
      </ul>

      <div>
         <Search/>
      </div>
    </div>
  );
};

export default Nav;
