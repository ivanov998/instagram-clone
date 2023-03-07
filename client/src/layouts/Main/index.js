import { Outlet } from "react-router-dom";
import Container from "react-bootstrap/Container";

import Sidebar from "../../components/Sidebar";
import TopNavbar from "../../components/TopNavbar";
import BottomNavbar from "../../components/BottomNavbar";
import "./styles.css";

const MainLayout = () => {
  
  // Top and bottom navbar are rendered when screen size < 768px (sm breakpoint)

  return (
    <Container fluid className="g-0 d-flex">
      <Sidebar />
      <TopNavbar />
      <Container fluid className="content">
        <Outlet />
      </Container>
      <BottomNavbar />
    </Container>
  );
}

export default MainLayout;