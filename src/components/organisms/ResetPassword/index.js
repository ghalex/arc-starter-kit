import React from 'react'
import PropTypes from 'prop-types'
import { Welcome, Logo, FormResetPassword } from 'components'
import { Icon, Title, Box } from 'zebbra/components'
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

  renderComplete () {
    return (
      <React.Fragment>
        <Box alignItems='center' p={[3, 3, 5]} mb={2}>
          <Icon name='location-arrow' color='primary' fontSize={5} inverted circular shadow />
          <Title thin m={3} fontSize={4} textAlign='center'>Instructions on resetting <br /> your password are on their way!</Title>
        </Box>
        <div>
          If you remember your password click here to, {' '}
          <Link className='white' to='/login'>log in.</Link>
        </div>
      </React.Fragment>
    )
  }

  render () {
    const { error, complete, onReset } = this.props

    if (complete) return this.renderComplete()

    return (
      <React.Fragment>
        <Welcome
          logo={<Logo />}
          title='Reset your'
          subtitle='password'
          error={error}
          info={
            <span>
              Enter your
              {' '}
              <b>email address</b>
              {' '}
              and we will send you a link to reset your password.
            </span>
          }
        >

          <Icon name='lock' color='primary' fontSize={5} inverted circular shadow />
          <FormResetPassword onSubmit={onReset} />
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
