import { Link } from "react-router-dom";

import defaultAvatar from "../../../assets/images/avatar/default.png";
import "./styles.css";

const Avatar = ({src, className = "", size = "md", link}) => {

    let avatarProps = {
        className: "avatar"
            .concat(" ", className)
            .concat(" ", size),
        to: link || "#"
    }
    
    return (
        <Link {...avatarProps}>
            <img className="rounded-circle" src={src ? src : defaultAvatar} alt="User profile picture" />
        </Link>
    );
}

export default Avatar;