import React from 'react'
import AuthForm from '../components/AuthForm'
import { useNavigate } from 'react-router-dom'

const SignUp = () => {

  const navigate = useNavigate();

  return (
    <AuthForm text ="Sign Up" alreadyOrNot="Already have an account?" RouteToButton="Sign In" onClick={() => navigate("/sign-in")} />
  )
}

export default SignUp