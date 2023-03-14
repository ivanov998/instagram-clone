import { useEffect } from "react";
import Avatar from "../../components/common/Avatar";
import "./styles.css";

const Profile = () => {

  useEffect(()=>{

  });

  return (
    <div className="profile-wrapper mx-auto">
      <div className="profile-header d-flex mt-5">
        <Avatar className="mx-5" size="lg" />
        <div className="user-overview mx-5">
          <div className="user">
            <h5>username</h5>
          </div>
          <div className="statistics mt-3">
            <ul className="d-flex flex-row ps-0">
              <li className="me-4">0 posts</li>
              <li className="me-4">0 followers</li>
              <li>0 following</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Profile;