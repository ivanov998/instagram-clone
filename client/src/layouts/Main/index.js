import { Outlet } from "react-router-dom";
import Container from "react-bootstrap/Container";

import Sidebar from "../../components/Sidebar";
import "./styles.css";

const MainLayout = () => {
  
  return (
    <Container fluid className="g-0 d-flex">
      <Sidebar />
      <Container fluid className="content">
        <Outlet />
      </Container>
    </Container>
  );
}

export default MainLayout;