import React from 'react'
import { compose } from 'recompose'
import { withRouter } from 'react-router-dom'
import { withRedirect, withToken } from '@coderbox/hocs'
import { Dialog, Subtitle, Text } from '@coderbox/atoms'
import { Logo, LoginForm } from 'components'
import { Login } from './styles'

const Component = ({ onLogin, error, ...props }) => {
  const Header = () => <Subtitle size='large'>Sign in to <b>your account</b></Subtitle>
  const Footer = () => <Text size='normal'>Don't have an account? <a href='/signup'>Sign Up</a></Text>

  return (
    <Login>
      <Logo size='large' />
      <Dialog header={<Header />} footer={<Footer />}>
        <LoginForm
          status={error}
          onSubmit={onLogin} />
      </Dialog>
    </Login>
  )
}

Component.displayName = 'Login'

export default compose(
  withRouter,
  withRedirect(p => !!p.token, ({ history }) => history.push('/')),
  withToken('storage')
)(Component)
