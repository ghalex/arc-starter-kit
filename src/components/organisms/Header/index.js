import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import {
  AppBar,
  Toolbar,
  Grid,
  Typography,
  Tooltip,
  IconButton,
  Button,
  Avatar
} from '@material-ui/core'
import NotificationsIcon from '@material-ui/icons/Notifications'
import HelpIcon from '@material-ui/icons/Help'
import { withStyles } from '@material-ui/core/styles'

const lightColor = 'rgba(255, 255, 255, 0.7)'

const styles = theme => ({
  root: {},
  iconButtonAvatar: {
    padding: 4
  },
  link: {
    textDecoration: 'none',
    color: lightColor,
    '&:hover': {
      color: theme.palette.common.white
    }
  }
})

const Header = ({ classes, ...props }) => {
  let className = cx('header', classes.root, props.className)

  return (
    <React.Fragment>
      <AppBar
        color="primary"
        position="sticky"
        elevation={0}
        {...props}
        className={className}
      >
        <Toolbar>
          <Grid container spacing={8} alignItems="center">
            <Grid item xs />
            <Grid item>
              <Typography className={classes.link} component="a" href="#">
                Go to docs
              </Typography>
            </Grid>
            <Grid item>
              <Tooltip title="Alerts • No alters">
                <IconButton color="inherit">
                  <NotificationsIcon />
                </IconButton>
              </Tooltip>
            </Grid>
            <Grid item>
              <IconButton color="inherit" className={classes.iconButtonAvatar}>
                <Avatar
                  className={classes.avatar}
                  src="https://material-ui.com/static/images/avatar/1.jpg"
                />
              </IconButton>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <AppBar
        component="div"
        className={classes.secondaryBar}
        color="primary"
        position="static"
        elevation={0}
      >
        <Toolbar>
          <Grid container alignItems="center" spacing={8}>
            <Grid item xs>
              <Typography color="inherit" variant="h5">
                Dashboard
              </Typography>
            </Grid>
            <Grid item>
              <Button
                className={classes.button}
                variant="outlined"
                color="inherit"
                size="small"
              >
                Web setup
              </Button>
            </Grid>
            <Grid item>
              <Tooltip title="Help">
                <IconButton color="inherit">
                  <HelpIcon />
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      {/* <AppBar
        component="div"
        className={classes.secondaryBar}
        color="primary"
        position="static"
        elevation={0}
      >
        <Tabs value={0} textColor="inherit">
          <Tab textColor="inherit" label="Users" />
          <Tab textColor="inherit" label="Sign-in method" />
          <Tab textColor="inherit" label="Templates" />
          <Tab textColor="inherit" label="Usage" />
        </Tabs>
      </AppBar> */}
    </React.Fragment>
  )
}

Header.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object
}

export default withStyles(styles)(Header)
