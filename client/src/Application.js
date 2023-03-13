import { connect } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import actions from './actions';
import MainLayout from "./layouts/Main";
import ProtectedRoute from "./services/routes/ProtectedRoute";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import Explore from "./pages/Explore";
import Register from "./pages/Register";


// TODO: split routes based on whether the user is authenticated

function Application() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        {/*  */}
        <Route path='/' element={
          <ProtectedRoute>
            <MainLayout />
          </ProtectedRoute>
          }>
          <Route index element={<Home />} />
          <Route path="*" element={<Profile />} />
        </Route>

        {/* <Route path="*" element={<Error />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default connect(null, actions)(Application);