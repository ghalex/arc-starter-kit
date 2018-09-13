import React from 'react'
import { SimpleTemplate } from 'templates'
import { Signup } from 'components'
import { compose } from 'recompose'
import { connect } from 'react-redux'

class SignupPage extends React.Component {
  render () {
    return (
      <SimpleTemplate>
        <Signup />
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
      onSignup: data => dispatch.app.signup(data)
    }
  }
)

export default compose(
  withStoreProps
)(SignupPage)
