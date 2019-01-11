import React from 'react'
import PropTypes from 'prop-types'
import { Grid, Typography, Paper } from '@material-ui/core'
import { withStyles } from '@material-ui/styles'
import { LoginForm, Logo } from 'components'

const styles = theme => ({
  root: {
    maxWidth: 650
  },
  grid: {
    overflow: 'hidden',
    '& > div': {
      padding: theme.spacing.unit * 4,
      minHeight: 280
    },
    '& > div:last-child': {
      backgroundColor: theme.palette.grey[100],
      borderTopRightRadius: theme.shape.borderRadius,
      borderBottomRightRadius: theme.shape.borderRadius
    }
  },
  thin: {
    fontWeight: '300 !important'
  }
})

const Page = ({ classes, ...props }) => {
  return (
    <Paper className={classes.root}>
      <Grid className={classes.grid} container>
        <Grid container item xs={12} sm={6} alignContent="space-between">
          <div>
            <Logo />
            <Typography variant="h5" component="h6" className={classes.thin}>
              Welcome to:
            </Typography>
            <Typography variant="h5">Dreaminternship</Typography>
          </div>
          <Typography>
            Having trouble signing in? You can{' '}
            <a href="#">reset your password here.</a>
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6}>
          <LoginForm />
        </Grid>
      </Grid>
    </Paper>
  )
}

Page.propTypes = {
  classes: PropTypes.object
}

export default withStyles(styles)(Page)
