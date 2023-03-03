import { connect } from "react-redux";
import { useEffect } from "react";

import actions from "../../../actions";
import Landing from "../../../pages/Landing";

const ProtectedRoute = (props) => {

    const { getCurrentUser, authenticated, userLoading } = props;

    useEffect(() => {
        if (!authenticated)
            getCurrentUser()
    }, []);

    if (userLoading) {
        return;
    }
    
    if (!authenticated) {
        return <Landing />;
    }

    return props.children;
}

const mapStateToProps = state => ({
    authenticated: state.authReducer.authenticated,
    userLoading: state.authReducer.userLoading
  })
  
export default connect(mapStateToProps, actions)(ProtectedRoute);