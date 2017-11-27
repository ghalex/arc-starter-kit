import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { LoginPage } from 'pages'

const AppRoutes = () => (
  <Router>
    <Switch>
      <Route path='/login' component={LoginPage} exact />
    </Switch>
  </Router>
)

export default AppRoutes
