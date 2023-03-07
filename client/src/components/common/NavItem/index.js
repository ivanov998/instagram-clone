import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavItem = ({icon, text, link, dropdownId, className}) => {
  
    const defaultClassNames = "nav-item d-block ";

    return (
    <a 
        href={link} 
        className={defaultClassNames + className}
        role="button" 
        id="dropdownMenuLink" 
        data-toggle="dropdown" 
        aria-haspopup="true" classNamearia-expanded="false"
    >
        <span className="icon-wrapper me-xl-3 d-block d-xl-inline-block mx-auto">
            <FontAwesomeIcon icon={icon} />
        </span>
        {text && <span className="label d-none d-xl-inline-block">{text}</span>}
    </a>
  );
}

export default NavItem;