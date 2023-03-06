import { faHomeAlt, faSearch, faCompass, faPlay, faPaperPlane, faHeart, faPlusSquare, faUserCircle, faBars } from "@fortawesome/free-solid-svg-icons";

import NavItem from "./NavItem";
import "./styles.css";

const Sidebar = () => {

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
            <NavItem key={id} icon={navItem.icon} text={navItem.text} link={navItem.link} />
        );
    
    return (
        <div className="sidebar min-vh-100 py-1 position-fixed d-flex flex-column ">
            <div className="sidebar-logo logo ms-4 mt-4">
                <h1>Instaclone</h1>
            </div>
            <div className="mt-3 px-2 flex-grow-1">
                {renderNavItems()}
            </div>
            <div className="ms-2 mb-2">
                <NavItem icon={faBars} text="More" link="#" />
            </div>
        </div>
  );
}

export default Sidebar;