import { connect } from "react-redux";
import React from "react";

import Container from 'react-bootstrap/Container';

import RegisterForm from "../../components/RegisterForm";
import Footer from '../../layouts/Footer';
import actions from "../../actions";

const Register = (props) => {

  const {
    isLoading,
    register,
    authFormChange
  } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    register();
  }

  const handleInputChange = (name, value) => {
    authFormChange(name,value);
  }

  return(
    <Container>
      <RegisterForm 
        handleSubmit={handleSubmit} 
        handleInputChange={handleInputChange}
        loading={isLoading}
      />
      <Footer />
    </Container>
  );
}

const mapStateToProps = state => ({
  isLoading: state.auth.isLoading,
  authFormData: state.auth.authFormData
})

export default connect(mapStateToProps, actions)(Register);