import React from 'react'
import qs from 'query-string'
import { SimpleTemplate } from 'templates'
import { ChangePassword } from 'components'
import { compose } from 'recompose'
import { connect } from 'react-redux'

class ChangePasswordPage extends React.Component {
  render () {
    return (
      <SimpleTemplate>
        <ChangePassword {...this.props} />
      </SimpleTemplate>
    )
  }
}

const withStoreProps = connect(
  (state, { history }) => {
    return {
      error: state.app.error,
      complete: state.app.passwordChange
    }
  },
  (dispatch, { history }) => {
    const params = qs.parse(history.location.search)
    return {
      onReset: data => dispatch.app.changePassword({ ...data, code: params.oobCode })
    }
  }
)

export default compose(
  withStoreProps
)(ChangePasswordPage)
