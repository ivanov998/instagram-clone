import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavItem = ({icon, text, link}) => {
  
    return (
    <a href={link} className="nav-item d-block my-2 mx-2 p-2 text-dark">
        <span className="icon-wrapper me-3">
            <FontAwesomeIcon icon={icon} />
        </span>
        <span className="label">{text}</span>
    </a>
  );
}

export default NavItem;