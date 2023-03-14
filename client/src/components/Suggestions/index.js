import Avatar from "../common/Avatar";

const Suggestions = ({user}) => {

  const { username, avatar } = user;

  return (
    <div className="suggestions-column">
      <div className="profile">
        <div className="flex-row align-items-center d-flex">
          <Avatar link={username} />
          <div className="username mx-3">
            <a href="#">{username}</a>
          </div>
          <div className="switch ms-auto">
            <a href="#">switch</a>
          </div>
        </div>
      </div>
      <div className="suggestions">
        {/* TODO: render suggestions from the suggestions prop */}
      </div>
    </div>
  );
}
export default Suggestions;