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
    registerFormChange
  } = props;

  const handleSubmit = (e) => {
    e.preventDefault();
    register();
  }

  const handleInputChange = (name, value) => {
    registerFormChange(name,value);
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
  isLoading: state.registerReducer.isLoading,
  registerFormData: state.registerReducer.registerFormData
})

export default connect(mapStateToProps, actions)(Register);