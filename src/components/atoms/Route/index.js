import React from 'react'
import PropTypes from 'prop-types'
import { Redirect } from '@reach/router'

const Route = ({ component: Component, locked, ...props }) => {
  return !locked ? <Component {...props} /> : <Redirect to="/login" />
}

Route.propTypes = {
  component: PropTypes.func,
  locked: PropTypes.bool
}

export default Route
