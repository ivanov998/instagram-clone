import { faHomeAlt, faCompass, faPlay, faPaperPlane, faPlusSquare } from "@fortawesome/free-solid-svg-icons";

import NavItem from "../common/NavItem";
import AvatarIcon from "../common/AvatarIcon";
import "./styles.css";

const BottomNavbar = () => {

  const avatarIcon = <AvatarIcon />;

  const navItems = [
    { icon: faHomeAlt, text: "Home", link: "#" },
    { icon: faCompass, text: "Explore", link: "#" },
    { icon: faPlay, text: "Reels", link: "#" },
    { icon: faPlusSquare, text: "Create", link: "#" },
    { icon: faPaperPlane, text: "Messages", link: "#" },
    { icon: avatarIcon, text: "Profile", link: "#" },
];

  const renderNavItems = () => 
      navItems.map((navItem,id) => 
          <NavItem 
              key={id} 
              icon={navItem.icon} 
              text={navItem.text} 
              link={navItem.link}
              className="text-dark"
          />
      );

  return (
    <div className="bottom-navbar w-100 position-fixed d-block d-md-none bg-white py-3">
        <div className="align-items-center justify-content-around d-flex">
          {renderNavItems()}
        </div>
    </div>
  );
}

export default BottomNavbar;