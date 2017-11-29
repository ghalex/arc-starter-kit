import React from 'react'
import { string, object } from 'yup'
import { withFormik } from 'formik'
import { compose, defaultProps } from 'recompose'
import { Field, Control, Input } from '@coderbox/forms'
import { Icon, Button, Text } from '@coderbox/atoms'

const Component = ({
  values,
  errors,
  status,
  isSubmitting,
  handleChange,
  handleSubmit,
  ...props
}) => {
  return (
    <form onSubmit={handleSubmit} className={props.className}>
      {status &&
        <Field>
          <Text color='danger' size='normal'>{status}</Text>
        </Field>
      }
      <Field>
        <Control hasLeftIcon>
          <Icon name='user' className='left' />
          <Input
            type='email'
            name='email'
            value={values.email}
            color={errors.email ? 'danger' : null}
            onChange={handleChange}
            onEnter={handleSubmit}
            placeholder='Your email address'
          />
        </Control>
      </Field>
      <Field>
        <Control hasLeftIcon>
          <Icon name='lock' className='left' />
          <Input
            type='password'
            name='password'
            value={values.password}
            color={errors.password ? 'danger' : null}
            onChange={handleChange}
            onEnter={handleSubmit}
            placeholder='Your password'
          />
        </Control>
      </Field>
      <Button color='primary' onClick={handleSubmit} isLoading={isSubmitting}>
        Login
      </Button>
    </form>
  )
}

Component.displayName = 'LoginForm'

const withDefaultProps = defaultProps({
  email: '',
  password: ''
})

const withFormikEnhancer = withFormik({
  validateOnChange: false,
  validationSchema: object().shape({
    email: string().email('Invalid email address').required('Email is required'),
    password: string().min(4, 'Must be longer than 4 characters').required('Password is required')
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
})

export default compose(
  withDefaultProps,
  withFormikEnhancer
)(Component)
