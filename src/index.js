import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { Router } from '@reach/router'
import { LoginPage, MainPage } from 'pages'
import { ThemeProvider } from '@material-ui/styles'
import { MuiThemeProvider } from '@material-ui/core/styles'
import { Route } from 'components'
import CssBaseline from '@material-ui/core/CssBaseline'
import store from './redux'
import theme from './theme'

document.startApp = function(container) {
  ReactDOM.render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <MuiThemeProvider theme={theme}>
          <div>
            <CssBaseline />
            <Router>
              <Route path="/" component={LoginPage} />
              <Route path="/app" component={MainPage} locked={true} />
            </Router>
          </div>
        </MuiThemeProvider>
      </ThemeProvider>
    </Provider>,
    container
  )
}

/** Start app */
document.startApp(document.getElementById('app'))
