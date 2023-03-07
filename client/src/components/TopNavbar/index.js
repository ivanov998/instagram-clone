import { faHeart } from "@fortawesome/free-solid-svg-icons";

import Logo from "../common/Logo";
import NavItem from "../common/NavItem";
import SearchBar from "../common/SearchBar";
import "./styles.css";

const TopNavbar = () => {
  return (
    <div className="top-navbar w-100 position-fixed d-block d-md-none px-2 bg-white">
        <div className="align-items-center justify-content-end d-flex">
            <Logo className="me-auto ms-2" />
            <SearchBar />
            <NavItem icon={faHeart} link="#" className="my-2 mx-2 p-2 text-dark" />
        </div>
    </div>
  );
}
export default TopNavbar;