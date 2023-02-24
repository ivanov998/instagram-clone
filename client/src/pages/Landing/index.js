import { connect } from "react-redux";
import React from "react";

import ContainerFluid from '../../components/ContainerFluid';
import LoginForm from '../../components/LoginForm';
import Footer from '../../layouts/Footer';
import actions from "../../actions"

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
    <ContainerFluid>
      <LoginForm 
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

export default connect(mapStateToProps, actions)(Landing);