import { bindActionCreators } from "redux";

import * as auth from "./services/actions/authActions";
import * as user from "./services/actions/userActions";

export default function mapDispatchToProps(dispatch) {
    return bindActionCreators(
      {
        ...auth,
        ...user
      },
      dispatch
    );
};
