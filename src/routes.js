import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { MainPage, LoginPage, SignupPage } from 'pages'

const AppRoutes = () => (
  <Router>
    <Switch>
      <Route path='/' component={MainPage} exact />
      <Route path='/login' component={LoginPage} exact />
      <Route path='/signup' component={SignupPage} exact />
    </Switch>
  </Router>
)

export default AppRoutes
