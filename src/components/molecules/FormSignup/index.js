import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { string, object } from 'yup'
import { withFormik } from 'formik'
import { Group, Button, Field, Input } from 'zebbra/components'
import { Form } from './styles'

/**
 * Signup form used to create a user.
 *
 * @name LoginLayout
 * @param {func} onSubmit
 * @render react
 *
 * @example
 *  <SignupForm onSubmit={data => console.log(data)} />
 */
class SignupForm extends React.Component {
  static displayName = 'SignupForm'
  static defaultProps = {}
  static propTypes = {
    onSubmit: PropTypes.func
  }

  render () {
    const className = cx('signup-form', this.props.className)
    const {
      values,
      errors,
      status,
      state,
      isSubmitting,
      handleChange,
      handleSubmit,
      handleBlur,
      ...props
    } = this.props

    return (
      <Form {...props} className={className}>
        <Field label='Name:' required>
          <Group fluid>
            <Button icon='user' bg='greyLight' />
            <Input
              type='text'
              name='name'
              color='black'
              value={values.name}
              variant={errors.name ? 'danger' : null}
              onChange={handleChange}
              onEnter={handleSubmit}
              placeholder='Your name'
              fluid />
          </Group>
        </Field>
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

        <Button fluid variant='primary' loading={isSubmitting} onClick={handleSubmit}>
          Create account
        </Button>
      </Form>
    )
  }
}

export default withFormik({
  validateOnChange: false,
  validationSchema: object().shape({
    email: string().email().required('Email is required'),
    name: string().min(4, 'Must be longer than 4 characters').required('Name is required'),
    password: string().required('Password is required')
  }),
  mapPropsToValues: p => ({
    email: '',
    name: '',
    password: ''
  }),
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
})(SignupForm)
