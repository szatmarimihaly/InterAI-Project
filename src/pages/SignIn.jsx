import React from 'react'
import AuthForm from '../components/AuthForm'

const SignIn = () => {
  return (
    <AuthForm text ="Sign In" alreadyOrNot="Don't have an account?" RouteToButton="Sign Up" />
  )
}

export default SignIn