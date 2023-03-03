const Profile = ({user}) => {

  const { username, email } = user;
  return (
    <div>{username}{email}</div>
  )
}
export default Profile