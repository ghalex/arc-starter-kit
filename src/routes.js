import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { LoginPage, MainPage } from 'pages'
import { getUser } from 'utils/storage'
// Auth
const PrivateRoute = ({ component: Component, ...rest }) => {
  let user = getUser()
  return (
    <Route
      {...rest}
      render={
        props =>
          (!user
            ? <Redirect to={{ pathname: '/login', state: { from: props.location } }} />
            : <Component user={user} {...props} />
          )
      }
    />
  )
}

const AppRoutes = () => (
  <Router>
    <Switch>
      <Route path='/login' component={LoginPage} exact />
      <PrivateRoute path='/' component={MainPage} exact />
    </Switch>
  </Router>
)

export default AppRoutes
