import { connect } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import actions from './actions';
import MainLayout from "./layouts/Main";
import ProtectedRoute from "./services/routes/ProtectedRoute";
import Discover from "./pages/Discover";
import Register from "./pages/Register";


// TODO: split routes based on whether the user is authenticated

function Application() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/register" element={<Register />} />
        <Route path='/' element={
          <ProtectedRoute>
            <MainLayout />
          </ProtectedRoute>
          }>
          <Route index element={<Discover />} />
        </Route>
        {/* <Route path="*" element={<Error />} /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default connect(null, actions)(Application);