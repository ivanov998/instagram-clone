import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./styles.css";

const SearchBar = () => {
  return (
    <div className="search position-relative">
        <FontAwesomeIcon className="search-icon text-secondary" icon={faSearch} />
        <input type="text" className="bg-light search-input form-control ps-5 py-1" placeholder="Search" />
    </div>
  );
}
export default SearchBar;