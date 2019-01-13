import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { Welcome, LoginForm } from 'components'

const Login = ({ onLogin, classes, ...props }) => {
  let className = cx('login', props.className)

  return (
    <div className={className}>
      <Welcome
        title="Welcome to"
        subtitle="Dreaminternship"
        info={
          <span>
            Having trouble log in? You can{' '}
            <a href="/reset">reset your password here.</a>
          </span>
        }
      >
        <LoginForm onLogin={onLogin} />
      </Welcome>
    </div>
  )
}

Login.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object,
  showLabel: PropTypes.bool,
  onLogin: PropTypes.func
}

export default Login
