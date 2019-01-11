import React from 'react'
import {
  FormControlLabel,
  Checkbox,
  Button,
  CircularProgress,
  TextField
} from '@material-ui/core'
import { useForm } from 'form-hooks'
import { makeStyles } from '@material-ui/styles'

const styles = makeStyles(theme => ({
  root: {},
  submit: {}
}))

const Form = props => {
  const classes = styles(props)
  const { values, handleChange, handleSubmit, isSubmitting } = useForm({
    initialValues: { email: '', password: '' },
    onSubmit: values => console.log(values),
    validate: values => ({})
  })

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
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
        className={classes.submit}
      >
        {!isSubmitting && <span>Sign in</span>}
        {isSubmitting && <CircularProgress size={24} />}
      </Button>
    </form>
  )
}

export default Form
