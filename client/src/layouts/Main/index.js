import { Outlet } from "react-router-dom";
import Container from "react-bootstrap/Container";

import Sidebar from "../../components/Sidebar";

const MainLayout = () => {
  
  return (
    <Container fluid className="g-0 d-flex">
      <Sidebar />
      <Outlet />
    </Container>
  );
}

export default MainLayout;