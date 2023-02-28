import React from 'react'
import { Link } from "react-router-dom"

import Button from 'react-bootstrap/Button';
import FormInput from '../common/FormInput'
import "./styles.css"

const renderAuthErrorMessage = (errorMessage) => {
  return (
    <p className="text-danger text-center mb-2">{errorMessage}</p>
  )
}

const Login = ({handleSubmit, handleInputChange, loading, formError, authError}) => {
  return (
    <>
      <div className="login-form p-4 mx-4">
        <div className="logo text-center mt-3 mb-4">
          <h1>Instaclone</h1>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-2">
            <FormInput 
              type="text"
              name="login"
              placeholder="Username or email"
              onInputChange={(name, value) => handleInputChange(name, value)}
              error={formError.login}
            />
          </div>
          <div className="mb-3">
            <FormInput
              type="password"
              name="password"
              placeholder="Password"
              onInputChange={(name, value) => handleInputChange(name, value)}
              error={formError.password}
              />
          </div>        
          <div className="mb-5">
            <Button variant="primary" type="submit" className="w-100 py-1" disabled={loading}>Log in</Button>
          </div>
          {authError && renderAuthErrorMessage(authError)}
          <div className="text-center">
            <Link to="#">Forgot password?</Link>
          </div>
        </form>
      </div>
      <div className="signup-cta-wrapper mx-4 mt-2 pt-3 text-center">
        <p>Don't have an account? <Link to="#">Sign up</Link></p>
      </div>
    </>
  )
}

export default Login