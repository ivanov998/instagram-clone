import { faHomeAlt, faSearch, faCompass, faPlay, faPaperPlane, faHeart, faPlusSquare, faUserCircle, faBars } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";

import actions from "../../actions";
import NavItem from "../common/NavItem";
import Logo from "../common/Logo";
import mobileLogo from "../../assets/images/logo/mobile-logo.svg";
import "./styles.css";


const Sidebar = (props) => {

    const { logout } = props;

    const navItems = [
        { icon: faHomeAlt, text: "Home", link: "#" },
        { icon: faSearch, text: "Search", link: "#" },
        { icon: faCompass, text: "Explore", link: "#" },
        { icon: faPlay, text: "Reels", link: "#" },
        { icon: faPaperPlane, text: "Messages", link: "#" },
        { icon: faHeart, text: "Notifications", link: "#" },
        { icon: faPlusSquare, text: "Create", link: "#" },
        { icon: faUserCircle, text: "Profile", link: "#" },
    ];

    const renderNavItems = () => 
        navItems.map((navItem,id) => 
            <NavItem 
                key={id} 
                icon={navItem.icon} 
                text={navItem.text} 
                link={navItem.link}
                className="m-2 p-2 text-dark"
            />
        );
    
    return (
        <div className="sidebar min-vh-100 py-1 position-fixed flex-column d-none d-md-flex">
            <div className="logo-wrapper mt-4">
                <Logo className="ms-4 d-none d-xl-block" />
                <div className="mobile-logo text-center d-block d-xl-none">
                    <img src={mobileLogo} alt="logo" width="35px" height="35px" />
                </div>
            </div>
            <div className="mt-3 px-2 flex-grow-1">
                {renderNavItems()}
            </div>
            <div className="ms-2 mb-2">
                <NavItem 
                    icon={faBars} 
                    text="More" 
                    link="#" 
                    dropdownId="more"
                    className="my-2 mx-2 p-2 text-dark"
                />
                <div className="dropdown-menu" aria-labelledby="more">
                    <a className="dropdown-item" href="#" onClick={() => logout()}>Log out</a>
                </div>
            </div>
        </div>
  );
}

export default connect(null, actions)(Sidebar);