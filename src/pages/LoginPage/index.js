import React from 'react'
import { SimpleTemplate } from 'templates'
import { Login } from 'components'
import { compose } from 'recompose'
import { connect } from 'react-redux'

class LoginPage extends React.Component {
  render () {
    return (
      <SimpleTemplate>
        <Login {...this.props} />
      </SimpleTemplate>
    )
  }
}

const withStoreProps = connect(
  state => {
    return {
      error: state.app.error
    }
  },
  (dispatch, { history }) => {
    return {
      onLogin: (data) => dispatch.app.login(data).then(() => history.push('/')),
      onLoginWithGoogle: () => dispatch.app.loginWithGoogle().then(() => history.push('/')),
      onLoginWithFacebook: () => dispatch.app.loginWithFacebook().then(() => history.push('/'))
    }
  }
)

export default compose(
  withStoreProps
)(LoginPage)
