import { connect } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import actions from './actions';
import MainLayout from "./layouts/Main";
import ProtectedRoute from "./services/routes/ProtectedRoute";
import Discover from "./pages/Discover";
import Profile from "./pages/Profile";

function Application() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={
          <ProtectedRoute>
            <MainLayout />
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