import { connect } from "react-redux";
import React from "react";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import "./styles.css"
import LoginForm from '../../components/LoginForm';
import actions from "../../actions"
import landingImage from '../../assets/images/landing-1.svg'



const Landing = (props) => {

  const {
    isLoading,
    login,
    authFormChange
  } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    login();
  }

  const handleInputChange = (name, value) => {
    authFormChange(name,value);
  }

  return(
    <Container className="d-flex justify-content-center align-items-md-center min-vh-100">
      <Row className="g-0 mt-5 mt-md-0">
        <Col md={7} className="d-none d-md-block">
            <img className="img-fluid w-100" src={landingImage} width={555} height={387} />
        </Col>
        <Col md={5}>
          <LoginForm
            handleSubmit={handleSubmit} 
            handleInputChange={handleInputChange}
            loading={isLoading}
          />
        </Col>
      </Row>
      
    </Container>
  );
}

const mapStateToProps = state => ({
  isLoading: state.authReducer.isLoading,
  authFormData: state.authReducer.authFormData
})

export default connect(mapStateToProps, actions)(Landing);