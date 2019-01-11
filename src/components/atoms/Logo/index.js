import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { withStyles } from '@material-ui/styles'

const styles = {
  root: {},
  image: {
    maxWidth: 68
  }
}

const Logo = ({ showLabel, classes, ...props }) => {
  let className = cx('logo-small', classes.root, props.className)
  let awsBucket = 'https://s3.eu-central-1.amazonaws.com/dreaminternship'

  return (
    <div {...props} className={className}>
      <img
        src={`${awsBucket}/logos/dreaminternship150.png`}
        className={classes.image}
      />
      {showLabel && (
        <label>
          <b>Dream</b>Internship
        </label>
      )}
    </div>
  )
}

Logo.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object,
  showLabel: PropTypes.bool
}

export default withStyles(styles)(Logo)
