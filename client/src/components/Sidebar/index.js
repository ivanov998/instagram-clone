import { faHomeAlt, faSearch, faCompass, faPlay } from "@fortawesome/free-solid-svg-icons";

import NavItem from "./NavItem";
import "./styles.css";

const Sidebar = () => {

    const navItems = [
        { icon: faHomeAlt, text: "Home", link: "#" },
        { icon: faSearch, text: "Search", link: "#" },
        { icon: faCompass, text: "Discover", link: "#" },
        { icon: faPlay, text: "Reels", link: "#" }
    ];

    const renderNavItems = () => 
        navItems.map((navItem,id) => 
            <NavItem key={id} icon={navItem.icon} text={navItem.text} link={navItem.link} />
        );
    
    return (
        <div className="sidebar min-vh-100 py-1">
            <div className="sidebar-logo logo ms-4 mt-5">
                <h1>Instaclone</h1>
            </div>
            <div className="mt-5 px-2">
                {renderNavItems()}
            </div>
        </div>
  );
}

export default Sidebar;