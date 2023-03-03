import Profile from "../../components/Profile";
import { connect } from "react-redux";
import actions from "../../actions";

const Discover = (props) => {

    const { user, logout } = props;

    return (
      <div>Discover
        <button onClick={() => logout()}>Logout</button>
       <Profile user={user}/>
      </div>
    );
}

const mapStateToProps = (state) => ({
  user: state.authReducer.user
});

export default connect(mapStateToProps, actions)(Discover);