import { createMuiTheme } from '@material-ui/core/styles'
import purple from '@material-ui/core/colors/deepPurple'

const theme = createMuiTheme({
  palette: {
    primary: purple
  },
  typography: { useNextVariants: true }
})

export default theme
