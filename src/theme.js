import { createMuiTheme } from '@material-ui/core/styles'
// import deepPurple from '@material-ui/core/colors/deepPurple'
// import purple from '@material-ui/core/colors/purple'
import red from '@material-ui/core/colors/red'

const theme = createMuiTheme({
  palette: {
    primary: {
      light: '#d1a8ff',
      main: '#9f79cc',
      dark: '#6f4c9b',
      contrastText: '#fff'
    },
    secondary: red
  },
  typography: { useNextVariants: true }
})

theme.overrides.MuiSnackbar = {
  root: {
    [theme.breakpoints.up('sm')]: {
      left: 24
    }
  }
}

theme.overrides.MuiSnackbarContent = {
  root: {
    [theme.breakpoints.up('sm')]: {
      flexGrow: 0,
      borderRadius: 4
    }
  },
  message: {
    [theme.breakpoints.up('sm')]: {
      whiteSpace: 'nowrap',
      width: 400
    },
    '& > span': {
      display: 'block',
      overflow: 'hidden',
      textOverflow: 'ellipsis'
    }
  }
}

theme.overrides.MuiDrawer = {}

theme.overrides.MuiListItemIcon = {
  root: {
    color: 'inherit',
    marginRight: 0
  }
}

theme.overrides.MuiListItemText = {
  primary: {
    color: 'inherit'
  }
}

theme.overrides.MuiTabs = {
  root: {
    marginLeft: theme.spacing.unit
  },
  indicator: {
    height: 3,
    borderTopLeftRadius: 3,
    borderTopRightRadius: 3,
    backgroundColor: theme.palette.common.white
  }
}
export default theme
