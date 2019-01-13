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
import { withStyles } from '@material-ui/core/styles'

const styles = theme => ({
  root: {
    fontFamily: theme.typography.fontFamily
  },
  title: {
    fontSize: 24,
    color: theme.palette.common.grey
  },
  item: {
    paddingTop: 10,
    paddingBottom: 10
  },
  itemCategory: {
    paddingTop: 16,
    paddingBottom: 16
  }
})

const Navbar = ({ classes, ...props }) => {
  let className = cx('navbar', classes.root, props.className)
  let items = [
    { id: 'Authentication', icon: <icons.People />, active: true },
    { id: 'Database', icon: <icons.DnsRounded /> },
    { id: 'Storage', icon: <icons.PermMediaOutlined /> },
    { id: 'Hosting', icon: <icons.Public /> }
  ]

  return (
    <Drawer
      variant="permanent"
      {...props}
      className={className}
      PaperProps={{ style: { width: 256 } }}
    >
      <List disablePadding>
        <ListItem
          className={cx(classes.item, classes.title, classes.itemCategory)}
        >
          Dreaminternship
        </ListItem>
        <ListItem className={cx(classes.item, classes.itemCategory)}>
          <ListItemIcon>
            <icons.Home />
          </ListItemIcon>
          <ListItemText>Project Overview</ListItemText>
        </ListItem>
        {items.map(item => (
          <ListItem button dense key={item.id} className={cx(classes.item)}>
            <ListItemIcon>{item.icon}</ListItemIcon>
            <ListItemText
              classes={{
                primary: classes.itemPrimary,
                textDense: classes.textDense
              }}
            >
              {item.id}
            </ListItemText>
          </ListItem>
        ))}
      </List>
    </Drawer>
  )
}

Navbar.propTypes = {
  className: PropTypes.string,
  classes: PropTypes.object
}

export default withStyles(styles)(Navbar)
