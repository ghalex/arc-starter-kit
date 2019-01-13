import React from 'react'
import PropTypes from 'prop-types'
import {
  FormControlLabel,
  Checkbox,
  Button,
  CircularProgress,
  TextField
} from '@material-ui/core'
import { useForm } from 'form-hooks'

const LoginForm = ({ onLogin, classes, ...props }) => {
  const { values, handleChange, handleSubmit, isSubmitting } = useForm({
    initialValues: { email: 'ghalex@gmail.com', password: '' },
    onSubmit: values => onLogin(values),
    validate: values => ({})
  })

  return (
    <form onSubmit={handleSubmit}>
      <TextField
        margin="normal"
        label="Email:"
        name="email"
        type="email"
        variant="outlined"
        autoComplete="email"
        value={values.email}
        onChange={handleChange}
        fullWidth
        required
      />
      <TextField
        margin="normal"
        label="Password:"
        name="password"
        type="password"
        variant="outlined"
        autoComplete="current-password"
        value={values.password}
        onChange={handleChange}
        fullWidth
        required
      />
      <FormControlLabel
        control={<Checkbox value="remember" color="primary" />}
        label="Remember me"
      />
      <Button
        type="submit"
        fullWidth
        variant="contained"
        color="primary"
        disabled={isSubmitting}
      >
        {!isSubmitting && <span>Sign in</span>}
        {isSubmitting && <CircularProgress size={24} />}
      </Button>
    </form>
  )
}

LoginForm.propTypes = {
  classes: PropTypes.object,
  onLogin: PropTypes.func
}

export default LoginForm
