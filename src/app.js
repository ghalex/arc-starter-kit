import React from 'react'
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'
import { FirebaseAutoLogin, GlobalStyles } from 'components'
import { ThemeProvider } from 'styled-components'
import { MainPage, LoginPage, SignupPage } from 'pages'
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
    return <div>App loading...</div>
  }
  render () {
    const { currentUser, ready, onNewUser } = this.props

    return (
      <ThemeProvider theme={theme}>
        <div>
          <FirebaseAutoLogin onNewUser={onNewUser} />
          <GlobalStyles />
          {!ready
            ? this.reanderLoading()
            : <Router>
              <Switch>
                <Route path='/login' component={LoginPage} />
                <Route path='/signup' component={SignupPage} />
                <PrivateRoute path='/' component={MainPage} isAuthenticated={currentUser !== null} exact />
              </Switch>
            </Router>}
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
  },
  dispatch => {
    return {
      onNewUser: user => dispatch.app.switchUser(user)
    }
  }
)

export default withStoreProps(Application)
