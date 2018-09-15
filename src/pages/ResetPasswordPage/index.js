import React from 'react'
import { SimpleTemplate } from 'templates'
import { ResetPassword } from 'components'
import { compose } from 'recompose'
import { connect } from 'react-redux'

class ResetPasswordPage extends React.Component {
  render () {
    return (
      <SimpleTemplate>
        <ResetPassword {...this.props} />
      </SimpleTemplate>
    )
  }
}

const withStoreProps = connect(
  state => {
    return {
      error: state.app.error,
      complete: state.app.passwordReset
    }
  },
  (dispatch, { history }) => {
    return {
      onReset: data => dispatch.app.resetPassword(data)
    }
  }
)

export default compose(
  withStoreProps
)(ResetPasswordPage)
