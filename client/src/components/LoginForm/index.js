import React from 'react'
import Button from '../common/Button/index.js'
import FormGroup from '../common/FormGroup.js'
import "./styles.css"

const Login = ({handleSubmit, handleInputChange, loading}) => {
  return (
    <div className="Auth-form-container">
        <form className="Auth-form" onSubmit={handleSubmit}>
          <div className="Auth-form-content">
            <h3 className="Auth-form-title">Sign In</h3>
            <FormGroup
              label="Email address or username" 
              type="text"
              name="login"
              placeholder="Enter email"
              onInputChange={(name, value) => handleInputChange(name, value)}
            />
            <FormGroup
              label="Password"
              type="password"
              name="password"
              placeholder="Enter password"
              onInputChange={(name, value) => handleInputChange(name, value)}
            />
            <div className="d-grid gap-2 mt-3">
              <Button type="primary" text="Submit" disabled={loading}/>
            </div>
            <p className="forgot-password text-right mt-2">
              Forgot <a href="#">password?</a>
            </p>
          </div>
        </form>
    </div>
  )
}

export default Login