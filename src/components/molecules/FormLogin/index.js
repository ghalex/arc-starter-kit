import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import * as yup from 'yup'
import { withFormik } from 'formik'
import { Group, Button, Field, Input, Text } from 'zebbra/components'
import { FormContainer } from './styles'

/**
 * Login form used to login user with email & password. It can
 * alsow show google of facebook buttons.
 *
 * @name FormLogin
 * @param {func} onSubmit
 * @param {func} onGoogle
 * @param {func} onFacebook
 * @render react
 *
 * @example
 *  <div style={{padding: 10}}>
 *    <LoginForm
 *      onSubmit={data => console.log(data)}
 *      onGoogle={() => console.log('open google popup')}
 *      onFacebook={() => console.log('open facebook popup')} />
 *  </div>
 */
class FormLogin extends React.Component {
  static displayName = 'LoginForm'
  static defaultProps = {}
  static propTypes = {
    onSubmit: PropTypes.func,
    onGoogle: PropTypes.func,
    onFacebook: PropTypes.func
  }

  render () {
    const className = cx('login-form', this.props.className)
    const {
      values,
      errors,
      isSubmitting,
      onGoogle,
      onFacebook,
      onAnonymous,
      handleChange,
      handleSubmit,
      ...props
    } = this.props

    return (
      <FormContainer {...props} className={className}>
        <div>
          <Field label='Email:' required>
            <Group fluid>
              <Button icon='envelope' bg='greyLight' />
              <Input
                type='email'
                name='email'
                color='black'
                value={values.email}
                variant={errors.email ? 'danger' : null}
                onChange={handleChange}
                onEnter={handleSubmit}
                placeholder='Your email address'
                fluid />
            </Group>
          </Field>
          <Field label='Password:' required>
            <Group fluid>
              <Button icon='unlock' bg='greyLight' />
              <Input
                color='black'
                type='password'
                name='password'
                value={values.password}
                variant={errors.password ? 'danger' : null}
                onChange={handleChange}
                onEnter={handleSubmit}
                placeholder='Your password'
                fluid />
            </Group>
          </Field>
          <Button variant='primary' onClick={handleSubmit} loading={isSubmitting} fluid>Login</Button>
        </div>
        {(onGoogle || onFacebook) && <Text textAlign='center' my={2} className='or'>or</Text>}
        <div>
          {onAnonymous && <Button variant='grey' fluid mb={2} onClick={onAnonymous}>Login Anonymous</Button>}
          {onGoogle && <Button variant='google' icon='google' fluid mb={2} onClick={onGoogle}>Login with Google</Button>}
          {onFacebook && <Button variant='facebook' icon='facebook' fluid onClick={onFacebook}>Login with Facebook</Button>}
        </div>
      </FormContainer>
    )
  }
}

export default withFormik({
  validateOnChange: false,
  validationSchema: yup.object().shape({
    email: yup.string().email('Invalid email address').required('Email is required'),
    password: yup.string().min(4, 'Must be longer than 4 characters').required('Password is required')
  }),
  mapPropsToValues: (p) => ({ email: p.email || '', password: p.password || '' }),
  handleSubmit: (values, { props, setSubmitting }) => {
    if (props.onSubmit) {
      props
        .onSubmit(values)
        .then((result) => {
          setSubmitting(false)
          if (props.onSubmitComplete) {
            props.onSubmitComplete()
          }
        })
    }
  }
})(FormLogin)
