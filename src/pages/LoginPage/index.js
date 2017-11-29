import React from 'react'
import { MainTemplate } from 'templates'
import { Login } from 'containers'

const LoginPage = ({ location }) => {
  return (
    <MainTemplate>
      <Login />
    </MainTemplate>
  )
}

export default LoginPage
