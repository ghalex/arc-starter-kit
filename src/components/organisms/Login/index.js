import React from 'react'
import PropTypes from 'prop-types'
import { Welcome, Logo, FormLogin } from 'components'
import { Icon } from 'zebbra/components'
import { Link } from 'react-router-dom'

class Login extends React.Component {
  static displayName = 'Login'
  static defaultProps = {
    error: null
  }

  static propTypes = {
    onLogin: PropTypes.func,
    onLoginWithGoogle: PropTypes.func,
    onLoginWithFacebook: PropTypes.func,
    error: PropTypes.string
  }

  render() {
    const {
      error,
      onLogin,
      onLoginWithGoogle,
      onLoginWithFacebook
    } = this.props
    return (
      <React.Fragment>
        <Welcome
          logo={<Logo />}
          title="Welcome to"
          subtitle="StarterKit"
          error={error}
          info={
            <span>
              Having trouble log in? You can{' '}
              <Link to="/reset">reset your password here.</Link>
            </span>
          }
        >
          <Icon
            name="user"
            color="primary"
            fontSize={5}
            inverted
            circular
            shadow
          />
          <FormLogin
            onSubmit={onLogin}
            onGoogle={onLoginWithGoogle}
            onFacebook={onLoginWithFacebook}
          />
        </Welcome>
        <div>
          Don't have an account ?{' '}
          <Link className="white" to="/signup">
            Sign up now!
          </Link>
        </div>
      </React.Fragment>
    )
  }
}

export default Login
