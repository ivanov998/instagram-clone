import React from 'react'
import Button from '../common/Button'
import FormInput from '../common/FormInput'
import "./styles.css"

const Login = ({handleSubmit, handleInputChange, loading}) => {
  return (
    <div className="login-form p-4 mx-4">
      <div className="logo text-center mt-3 mb-4">
        <h1>Instaclone</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <div className="mb-2">
          <FormInput
            label="Email address or username" 
            type="text"
            name="login"
            placeholder="Enter email"
            onInputChange={(name, value) => handleInputChange(name, value)}
          />
        </div>
        <div className="mb-3">
          <FormInput
            label="Password"
            type="password"
            name="password"
            placeholder="Enter password"
            onInputChange={(name, value) => handleInputChange(name, value)}
            />
        </div>        
        <div className="mb-5">
          <Button type="primary" text="Submit" disabled={loading}/>
        </div>
        <p className="forgot-password text-right mt-2">
          Forgot <a href="#">password?</a>
        </p>
      </form>
    </div>
  )
}

export default Login