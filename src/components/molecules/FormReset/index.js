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
 * @name FormReset
 * @param {func} onSubmit
 * @render react
 *
 * @example
 *  <FormReset onSubmit={data => console.log(data)} />
 */
class FormReset extends React.Component {
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
      showFacebook,
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
        <Button variant='primary' onClick={handleSubmit} loading={isSubmitting} fluid>Reset password</Button>
      </FormContainer>
    )
  }
}

export default withFormik({
  validateOnChange: false,
  validationSchema: yup.object().shape({
    email: yup.string().email('Invalid email address').required('Email is required')
  }),
  mapPropsToValues: (p) => ({ email: p.email }),
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
})(FormReset)
