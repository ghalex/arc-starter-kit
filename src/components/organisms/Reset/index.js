import React from 'react'
import PropTypes from 'prop-types'
import { Welcome, Logo, FormReset } from 'components'
import { Icon } from 'zebbra/components'
import { Link } from 'react-router-dom'

class Reset extends React.Component {
  static displayName = 'Reset'
  static defaultProps = {
    error: null
  }

  static propTypes = {
    onReset: PropTypes.func,
    error: PropTypes.string
  }

  render () {
    const { error, onReset } = this.props
    return (
      <React.Fragment>
        <Welcome
          logo={<Logo />}
          title='Reset your'
          subtitle='password'
          error={error}
          info={
            <span>
              Enter your <b>email address</b> and we will send you a link to reset your password.
            </span>
          } >
          <Icon name='lock' color='primary' fontSize={5} inverted circular shadow />
          <FormReset onSubmit={onReset} />
        </Welcome>
        <div>
          Already have an account with us? {' '}
          <Link className='white' to='/login'>Log in instead.</Link>
        </div>
      </React.Fragment>
    )
  }
}

export default Reset
