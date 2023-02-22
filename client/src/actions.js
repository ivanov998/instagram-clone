import { bindActionCreators } from "redux";

import * as login from "./services/actions/loginAction"
import * as register from "./services/actions/registerAction"

export default function mapDispatchToProps(dispatch) {
    return bindActionCreators(
      {
        ...login,
        ...register
      },
      dispatch
    );
};
