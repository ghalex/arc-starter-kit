import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import * as yup from 'yup'
import { withFormik } from 'formik'
import { Group, Button, Field, Input } from 'zebbra/components'
import { FormContainer } from './styles'

/**
 * Reset form used to reset user password.
 *
 * @name FormChangePassword
 * @param {func} onSubmit
 * @render react
 *
 * @example
 *  <FormReset onSubmit={data => console.log(data)} />
 */
class FormChangePassword extends React.Component {
  static displayName = 'LoginForm'
  static defaultProps = {}
  static propTypes = {
    onSubmit: PropTypes.func
  }

  render () {
    const className = cx('reset-form', this.props.className)
    const {
      values,
      errors,
      isSubmitting,
      handleChange,
      handleSubmit,
      ...props
    } = this.props

    return (
      <FormContainer {...props} className={className}>
        <Field label='Password:' required>
          <Group fluid>
            <Button icon='unlock' bg='greyLight' />
            <Input
              type='password'
              name='password'
              color='black'
              value={values.password}
              variant={errors.password ? 'danger' : null}
              onChange={handleChange}
              onEnter={handleSubmit}
              placeholder='Your password'
              fluid />
          </Group>
        </Field>
        <Field label='Retype password:' required>
          <Group fluid>
            <Button icon='unlock' bg='greyLight' />
            <Input
              type='password'
              name='passwordConfirm'
              color='black'
              value={values.passwordConfirm}
              variant={errors.passwordConfirm ? 'danger' : null}
              onChange={handleChange}
              onEnter={handleSubmit}
              placeholder='Your password'
              fluid />
          </Group>
        </Field>
        <Button variant='primary' onClick={handleSubmit} loading={isSubmitting} fluid>Change password</Button>
      </FormContainer>
    )
  }
}

export default withFormik({
  validateOnChange: false,
  validationSchema: yup.object().shape({
    password: yup.string().required('Password is required'),
    passwordConfirm: yup.string().oneOf([yup.ref('password'), null]).required('Password confirm is required')
  }),
  mapPropsToValues: (p) => ({ password: '', passwordConfirm: '' }),
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
})(FormChangePassword)
