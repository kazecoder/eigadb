import "./Nav.css";
import Search from "./Search";

const Nav = () => {
  return (
    <div className="navbar">
      <img
        className="logo"
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Logonetflix.png/1920px-Logonetflix.png"
        alt="Logo"
      />

      <ul className="nav-links">
        <li>Home</li>
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
