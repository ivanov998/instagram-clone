import { connect } from "react-redux";
import React from "react";

import RegisterForm from "../../components/RegisterForm";

import ContainerFluid from '../../components/ContainerFluid';
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
    <ContainerFluid>
      <RegisterForm 
        handleSubmit={handleSubmit} 
        handleInputChange={handleInputChange}
        loading={isLoading}
      />
      <Footer />
    </ContainerFluid>
  );
}

const mapStateToProps = state => ({
  isLoading: state.authReducer.isLoading,
  authFormData: state.authReducer.authFormData
})

export default connect(mapStateToProps, actions)(Register);