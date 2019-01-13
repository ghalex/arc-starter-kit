import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router } from '@reach/router'
import { LoginPage, MainPage } from 'pages'
import { SnackbarProvider } from 'notistack'
import { IconButton } from '@material-ui/core'
import { MuiThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import CloseIcon from '@material-ui/icons/Close'
import { Route } from 'components'
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
      <MuiThemeProvider theme={theme}>
        <SnackbarProvider action={action} hideIconVariant={true} maxSnack={2}>
          <div>
            <CssBaseline />
            <Router>
              <Route path="/login" component={LoginPage} />
              <Route path="/" component={MainPage} locked={!!user} />
            </Router>
          </div>
        </SnackbarProvider>
      </MuiThemeProvider>
    </Provider>,
    container
  )
}

/** Start app */
document.startApp(document.getElementById('app'))
