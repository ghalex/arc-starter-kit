import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { GlobalStyles } from 'components'
import { ThemeProvider } from 'styled-components'
import { MainPage, LoginPage, SignupPage, ResetPasswordPage, ChangePasswordPage, LoadingPage } from 'pages'
import { connect } from 'react-redux'
import theme from './theme'

const PrivateRoute = ({ component: Component, isAuthenticated, ...rest }) => (
  <Route
    {...rest}
    render={props =>
      (isAuthenticated
        ? <Component {...props} />
        : <Redirect to={{ pathname: '/login', state: { from: props.location } }} />)}
  />
)

class Application extends React.Component {
  reanderLoading () {
    return <LoadingPage />
  }

  renderRoutes () {
    let { currentUser } = this.props

    return (
      <Router>
        <Switch>
          <Route path='/login' component={LoginPage} />
          <Route path='/signup' component={SignupPage} />
          <Route path='/reset' component={ResetPasswordPage} />
          <Route path='/change' component={ChangePasswordPage} />
          <PrivateRoute path='/' component={MainPage} isAuthenticated={currentUser !== null} exact />
        </Switch>
      </Router>
    )
  }

  render () {
    const { ready } = this.props

    return (
      <ThemeProvider theme={theme}>
        <div>
          <GlobalStyles />
          {!ready
            ? this.reanderLoading()
            : this.renderRoutes()}
        </div>
      </ThemeProvider>
    )
  }
}

const withStoreProps = connect(
  state => {
    return {
      ready: state.app.ready,
      currentUser: state.app.currentUser
    }
  }
)

export default withStoreProps(Application)
