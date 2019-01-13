import React from 'react'
import PropTypes from 'prop-types'
import { SimpleTemplate } from 'templates'
import { Login, Notifier } from 'components'
import { connect } from 'react-redux'

const LoginPage = ({ notifications, onRemoveSnackbar, ...props }) => {
  return (
    <SimpleTemplate>
      <Notifier
        notifications={notifications}
        removeSnackbar={onRemoveSnackbar}
      />
      <Login {...props} />
    </SimpleTemplate>
  )
}

LoginPage.propTypes = {
  notifications: PropTypes.array,
  onRemoveSnackbar: PropTypes.func
}

const withStoreProps = connect(
  state => {
    return {
      error: state.app.error,
      notifications: state.app.notifications
    }
  },
  (dispatch, { navigate }) => {
    const { app } = dispatch
    return {
      onLogin: data => app.login(data).then(() => navigate('/')),
      onLoginWithGoogle: () => app.loginWithGoogle().then(() => navigate('/')),
      onLoginWithFacebook: () =>
        app.loginWithFacebook().then(() => navigate('/')),
      onRemoveSnackbar: key => app.removeNotification(key)
    }
  }
)

export default withStoreProps(LoginPage)
