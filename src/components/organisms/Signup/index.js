import React from 'react'
import PropTypes from 'prop-types'
import { Welcome, Logo, FormSignup } from 'components'
import { Link } from 'react-router-dom'

class Signup extends React.Component {
  static displayName = 'Signup'
  static defaultProps = {
    error: null
  }

  static propTypes = {
    onSignup: PropTypes.func,
    error: PropTypes.string
  }

  render () {
    const { error, onSignup } = this.props
    return (
      <React.Fragment>
        <Welcome
          logo={<Logo />}
          title='Create your'
          subtitle='free account'
          error={error}
          info={
            <span>
              Having trouble log in? You can {' '}
              <Link to='/reset'>reset your password here.</Link>
            </span>
          } >
          <FormSignup onSubmit={onSignup} />
        </Welcome>
        <div>
          Already have an account with us? {' '}
          <Link className='white' to='/login'>Log in instead.</Link>
        </div>
      </React.Fragment>
    )
  }
}

export default Signup
