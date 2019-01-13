import React from 'react'
import PropTypes from 'prop-types'
import { Typography } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'
import { version } from '/../package.json'

const styles = theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
    '& > section': {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      flex: 1
    }
  }
})

const SimpleTemplate = ({ children, classes, ...props }) => {
  return (
    <div {...props} className={classes.root}>
      <section>{children}</section>
      <footer>
        <Typography align="center" gutterBottom>
          © 2018 StarterKit, <a href="#">v{version}</a>
        </Typography>
      </footer>
    </div>
  )
}

SimpleTemplate.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object
}

export default withStyles(styles)(SimpleTemplate)
