import { connect } from "react-redux";
import React from "react";

import ContainerFluid from '../../components/ContainerFluid';
import Login from '../../components/Login';
import Footer from '../../layouts/Footer';
import actions from "../../actions"

class Landing extends React.Component {

  render() {
    
    const {
      login,
      loginFormChange
    } = this.props;

    const handleSubmit = (e) => {
      e.preventDefault();
      login();
    }
  
    const handleInputChange = (name, value) => {
      loginFormChange(name,value);
    }

    return (
      <ContainerFluid>
        <Login 
          handleSubmit={handleSubmit} 
          handleInputChange={handleInputChange} 
        />
        <Footer />
      </ContainerFluid>
    );
  }
}

const mapStateToProps = state => ({
  loginFormData: state.loginReducer.loginFormData
})

export default connect(mapStateToProps, actions)(Landing);