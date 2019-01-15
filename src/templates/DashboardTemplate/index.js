import React from 'react'
import PropTypes from 'prop-types'
import { Navbar, Header, Content } from 'components'
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
  body: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column'
  },
  content: {
    flex: 1,
    padding: '48px 36px 0'
  }
})

const DashboardTemplate = ({ children, classes, ...props }) => {
  return (
    <div className={classes.root}>
      <nav className={classes.drawer}>
        <Navbar width={drawerWidth} />
      </nav>
      <div className={classes.body}>
        <Header />
        <main className={classes.content}>
          <Content />
        </main>
      </div>
    </div>
  )
}

DashboardTemplate.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object
}

export default withStyles(styles)(DashboardTemplate)
