import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { MainPage, LoginPage, SignupPage } from 'pages'

const AppRoutes = () => (
  <Switch>
    <Route path='/' component={MainPage} exact />
    <Route path='/login' component={LoginPage} exact />
    <Route path='/signup' component={SignupPage} exact />
  </Switch>
)

export default AppRoutes
