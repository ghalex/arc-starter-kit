import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router } from '@reach/router'
import { LoginPage, MainPage } from 'pages'
import { ThemeProvider } from '@material-ui/styles'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { SnackbarProvider } from 'notistack'
import { Route } from 'components'
import CssBaseline from '@material-ui/core/CssBaseline'
import { IconButton } from '@material-ui/core'
import CloseIcon from '@material-ui/icons/Close'
import firebase from 'utils/firebase'
import store from './redux'
import theme from './theme'

document.startApp = function(container) {
  var user = firebase.auth().currentUser
  var action = (
    <IconButton key="close" size="small" color="inherit">
      <CloseIcon />
    </IconButton>
  )

  ReactDOM.render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <MuiThemeProvider theme={theme}>
          <SnackbarProvider action={action} hideIconVariant={true} maxSnack="2">
            <div>
              <CssBaseline />
              <Router>
                <Route path="/login" component={LoginPage} />
                <Route path="/" component={MainPage} locked={!!user} />
              </Router>
            </div>
          </SnackbarProvider>
        </MuiThemeProvider>
      </ThemeProvider>
    </Provider>,
    container
  )
}

/** Start app */
document.startApp(document.getElementById('app'))
