import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavItem = ({icon, text, link, dropdownId}) => {
  
    return (
    <a 
        href={link} 
        className={`nav-item d-block my-2 mx-2 p-2 text-dark ${dropdownId && "dropdown-toggle"}`}
        role="button" id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"
    >
        <span className="icon-wrapper me-3">
            <FontAwesomeIcon icon={icon} />
        </span>
        <span className="label">{text}</span>
    </a>
  );
}

export default NavItem;