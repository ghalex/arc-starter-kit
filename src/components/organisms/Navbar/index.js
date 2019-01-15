import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import {
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText
} from '@material-ui/core'
import * as icons from '@material-ui/icons'
import { Logo } from 'components'
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  root: {
    fontFamily: theme.typography.fontFamily
  },
  title: {
    background: theme.palette.common.white,
    paddingTop: 17,
    paddingBottom: 17,
    color: theme.palette.grey[800]
  },
  item: {
    paddingTop: 10,
    paddingBottom: 10,
    color: theme.palette.grey[600]
  },
  itemActionable: {
    '&:hover': {}
  },
  itemActive: {
    color: theme.palette.primary.dark,
    background: theme.palette.grey[100]
  }
})

const Navbar = ({ classes, width, ...props }) => {
  let className = cx('navbar', classes.root, props.className)
  let items = [
    { id: 'Dashboard', icon: <icons.DnsRounded />, active: true },
    { id: 'Company', icon: <icons.Domain /> },
    { id: 'Internships', icon: <icons.Assignment /> },
    { id: 'Students', icon: <icons.People /> }
  ]

  return (
    <Drawer
      variant="permanent"
      {...props}
      className={className}
      classes={{ paper: classes.paper }}
      PaperProps={{ style: { width: width } }}
    >
      <List disablePadding>
        <ListItem divider alignItems="center" className={cx(classes.title)}>
          <Logo showLabel center />
        </ListItem>
        {/* <ListItem divider className={cx(classes.item, classes.itemCategory)}>
          <ListItemAvatar>
            <Avatar
              alt="Remy Sharp"
              className={classes.companyAvatar}
              src="https://maxafritz.com/wp-content/uploads/2017/03/7ffacff610ef00856f6eb006a2d091a4_ms-logo-transparent-microsoft-office-clipart-background-transparent_2000-2000.png"
            />
          </ListItemAvatar>
          <ListItemText>Microsoft</ListItemText>
        </ListItem> */}
        {items.map(item => (
          <ListItem
            button
            key={item.id}
            className={cx(
              classes.item,
              classes.itemActionable,
              item.active && classes.itemActive
            )}
          >
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText>{item.id}</ListItemText>
          </ListItem>
        ))}
      </List>
    </Drawer>
  )
}

Navbar.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object,
  width: PropTypes.number
}

export default withStyles(styles)(Navbar)
