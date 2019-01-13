import React from 'react'
import PropTypes from 'prop-types'
import { Navbar } from 'components'
import { withStyles } from '@material-ui/core/styles'

const drawerWidth = 256

const styles = theme => ({
  root: {
    display: 'flex',
    minHeight: '100vh'
  },
  drawer: {
    border: '1px solid red',
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  content: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
  }
})

const DashboardTemplate = ({ children, classes, ...props }) => {
  return (
    <div className={classes.root}>
      <nav className={classes.drawer}>
        <Navbar />
      </nav>
      <div className={classes.content}>content</div>
    </div>
  )
}

DashboardTemplate.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object
}

export default withStyles(styles)(DashboardTemplate)
