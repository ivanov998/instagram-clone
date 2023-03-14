import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";

import "./styles.css";

const NavItem = ({icon, text, link, className, dropdown, onClick}) => {
  
    const defaultClassNames = "nav-item d-block";

    let linkProps = {
        to : link || "#", 
        className: defaultClassNames.concat(" ", className),
        onClick
    }

    if (dropdown) {
        linkProps = {
            ...linkProps,
            role: "button", 
            id: dropdown,
            "data-toggle": "dropdown",
            "aria-haspopup":"true",
            "aria-expanded":"false"
        }
    }

    return (
        <Link {...linkProps}>
            <span className="icon-wrapper me-xl-3 d-block d-xl-inline-block mx-auto">
                <FontAwesomeIcon icon={icon} />
            </span>
            {text && <span className="label d-none d-xl-inline-block">{text}</span>}
        </Link>
  );
}

export default NavItem;