import { bindActionCreators } from "redux";

import * as auth from "./services/actions/authActions"

export default function mapDispatchToProps(dispatch) {
    return bindActionCreators(
      {
        ...auth
      },
      dispatch
    );
};
