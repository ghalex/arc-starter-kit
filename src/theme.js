import { createMuiTheme } from '@material-ui/core/styles'
import purple from '@material-ui/core/colors/deepPurple'

const theme = createMuiTheme({
  palette: {
    primary: purple
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

export default theme
