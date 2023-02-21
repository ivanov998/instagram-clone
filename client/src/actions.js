import { bindActionCreators } from "redux";

import * as login from "./services/actions/loginAction"

export default function mapDispatchToProps(dispatch) {
    return bindActionCreators(
      {
        ...login
      },
      dispatch
    );
};
