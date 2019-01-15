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
  Paper,
  TextField,
  Button
} from '@material-ui/core'
import RefreshIcon from '@material-ui/icons/Refresh'
import SearchIcon from '@material-ui/icons/Search'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  root: {
    maxWidth: 936,
    margin: 'auto',
    overflow: 'hidden'
  },
  searchBar: {
    borderBottom: '1px solid rgba(0, 0, 0, 0.12)'
  },
  searchInput: {
    fontSize: theme.typography.fontSize
  },
  block: {
    display: 'block'
  },
  addUser: {
    marginRight: theme.spacing.unit
  },
  contentWrapper: {
    margin: '40px 16px'
  }
})

const Content = ({ classes, ...props }) => {
  let className = cx('header', classes.root, props.className)

  return (
    <Paper className={className}>
      <AppBar
        className={classes.searchBar}
        position="static"
        color="default"
        elevation={0}
      >
        <Toolbar>
          <Grid container spacing={16} alignItems="center">
            <Grid item>
              <SearchIcon className={classes.block} color="inherit" />
            </Grid>
            <Grid item xs>
              <TextField
                fullWidth
                placeholder="Search by email address, phone number, or user UID"
                InputProps={{
                  disableUnderline: true,
                  className: classes.searchInput
                }}
              />
            </Grid>
            <Grid item>
              <Button
                variant="contained"
                color="primary"
                className={classes.addUser}
              >
                Add user
              </Button>
              <Tooltip title="Reload">
                <IconButton>
                  <RefreshIcon className={classes.block} color="inherit" />
                </IconButton>
              </Tooltip>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
      <div className={classes.contentWrapper}>
        <Typography color="textSecondary" align="center">
          No users for this project yet
        </Typography>
      </div>
    </Paper>
  )
}

Content.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object
}

export default withStyles(styles)(Content)
