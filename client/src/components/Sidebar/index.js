import { faHomeAlt, faSearch, faCompass, faPlay, faPaperPlane, faHeart, faPlusSquare, faUserCircle, faBars } from "@fortawesome/free-solid-svg-icons";
import { connect } from "react-redux";

import actions from "../../actions";
import NavItem from "../common/NavItem";
import Logo from "../common/Logo";
import mobileLogo from "../../assets/images/logo/mobile-logo.svg";
import "./styles.css";
import Avatar from "../common/Avatar";

const Sidebar = (props) => {

    const { openPostModal, logout, user } = props;

    const profileUrl = `/${user.username}`;

    const avatarIcon = <Avatar size="icon" />;

    const navItems = [
        { icon: faHomeAlt, text: "Home", link: "/" },
        { icon: faSearch, text: "Search" },
        { icon: faCompass, text: "Explore", link: "#" },
        { icon: faPlay, text: "Reels", link: "#" },
        { icon: faPaperPlane, text: "Messages", link: "#" },
        { icon: faHeart, text: "Notifications" },
        { icon: faPlusSquare, text: "Create", onClick: openPostModal },
        { icon: avatarIcon, text: "Profile", link: profileUrl },
    ];

    const renderNavItems = () => 
        navItems.map((navItem,id) => 
            <NavItem 
                key={id} 
                icon={navItem.icon} 
                text={navItem.text} 
                link={navItem.link}
                onClick={navItem.onClick}
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
                    dropdown="more"
                    className="my-2 mx-2 p-2 text-dark"
                />
                <div className="dropdown-menu" aria-labelledby="more">
                    <a className="dropdown-item" href="#" onClick={() => logout()}>Log out</a>
                </div>
            </div>
        </div>
  );
}

const mapStateToProps = (state) => ({
    user: state.user.user
})

export default connect(mapStateToProps, actions)(Sidebar);