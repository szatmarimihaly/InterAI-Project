import React from 'react'
import AuthForm from '../components/AuthForm'
import { useNavigate } from 'react-router-dom'

const SignIn = () => {

  const navigate = useNavigate();

  return (
    <AuthForm text ="Sign In" alreadyOrNot="Don't have an account?" RouteToButton="Sign Up" onClick={() => navigate("/sign-up")} />
  )
}

export default SignIn