import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { Welcome, LoginForm } from 'components'
import { withStyles } from '@material-ui/styles'

const styles = theme => ({
  root: {}
})

const Login = ({ onLogin, classes, ...props }) => {
  let className = cx('login', classes.root, props.className)

  return (
    <div {...props} className={className}>
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
        <LoginForm />
      </Welcome>
    </div>
  )
}

Login.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object,
  showLabel: PropTypes.bool,
  onLogin: PropTypes.func.isRequired
}

export default withStyles(styles)(Login)
