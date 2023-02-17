import { connect } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom"

import ProtectedRoute from "../ProtectedRoute";
import Discover from "../Discover";
import SharedLayout from "../SharedLayout";
import Profile from "../Profile";
import actions from '../../actions'

function Application() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <ProtectedRoute>
            <SharedLayout />
          </ProtectedRoute>
          }>
          <Route index element={<Discover />} />
          <Route path="profile" element={<Profile />} />
        </Route>
        {/* <Route path="*" element={<Error />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default connect(null, actions)(Application);