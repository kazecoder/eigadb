import Nav from "./Nav";
import { useSearchContext } from "./SearchContext";
import SearchResults from "./SearchResults";

const NavWrapper = ({ children }) => {
  const { flag } = useSearchContext();
  return (
    <>
      <Nav />
      {!flag ? <>{children}</> : <SearchResults />}
    </>
  );
};

export default NavWrapper;
