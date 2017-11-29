import React from 'react'
import { Login } from 'components'
import { compose } from 'recompose'
import { inject, observer } from 'mobx-react'

const LoginContainer = observer(
  props => <Login {...props} />
)

const withStoreProps = inject(
  ({ store }, ownProps) => {
    return {
      token: store.jwt,
      error: store.error,
      onLogin: data => store.login(data)
    }
  }
)

export default compose(
  withStoreProps
)(LoginContainer)
