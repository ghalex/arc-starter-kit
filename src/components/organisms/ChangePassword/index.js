import React from 'react'
import PropTypes from 'prop-types'
import { Welcome, Logo, FormChangePassword } from 'components'
import { Icon, Title, Box } from 'zebbra/components'
import { Link } from 'react-router-dom'

class ChangePassword extends React.Component {
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
          <Icon name='lock' color='primary' fontSize={5} inverted circular shadow />
          <Title thin m={3} fontSize={4} textAlign='center'>Your password has been changed<br /> with success!</Title>
        </Box>
        <div>
          Click here to, {' '}
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
          title='Change your'
          subtitle='password'
          error={error}
          info={
            <span>
              Please enter your new password.
            </span>
          } >
          <Icon name='lock' color='primary' fontSize={5} inverted circular shadow />
          <FormChangePassword onSubmit={onReset} />
        </Welcome>
        <div>
          If you remember your password, {' '}
          <Link className='white' to='/login'>log in instead.</Link>
        </div>
      </React.Fragment>
    )
  }
}

export default ChangePassword
