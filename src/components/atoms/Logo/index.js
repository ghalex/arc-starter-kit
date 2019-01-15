import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    flex: 1
  },
  center: {
    alignItems: 'center'
  },
  image: {
    maxWidth: 68
  },
  label: {
    fontSize: 22
  }
})

const Logo = ({ showLabel, center, classes, ...props }) => {
  let className = cx(
    'logo',
    { [classes.root]: true },
    { [classes.center]: center },
    props.className
  )
  let awsBucket = 'https://s3.eu-central-1.amazonaws.com/dreaminternship'

  return (
    <div {...props} className={className}>
      <img
        src={`${awsBucket}/logos/dreaminternship150.png`}
        className={classes.image}
      />
      {showLabel && (
        <label className={classes.label}>
          <b>Dream</b>internship
        </label>
      )}
    </div>
  )
}

Logo.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object,
  showLabel: PropTypes.bool,
  center: PropTypes.boo
}

export default withStyles(styles)(Logo)
