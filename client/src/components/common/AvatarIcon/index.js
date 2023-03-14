import defaultAvatar from "../../../assets/images/avatar/default.png";
import "./styles.css";

const AvatarIcon = ({src}) => {

  return (
    <span className="avatar-icon d-block"> 
        <img className="rounded-circle" src={src ? src : defaultAvatar} alt="" />
    </span>
  );
}

export default AvatarIcon;