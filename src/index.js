import React from 'react'
import ReactDOM from 'react-dom'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import theme from './theme'
import Routes from './routes'
import store from './store'

document.startApp = function (container) {
  const GlobalStyles = createGlobalStyle`
    html, body {
      font-family: ${p => p.theme.fonts.primary};
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      background-color: #f1f1f1;
    }
  `
  console.log(store.browserHistory)
  ReactDOM.render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <div>
          <ConnectedRouter history={store.history}>
            <Routes />
          </ConnectedRouter>
          <GlobalStyles />
        </div>
      </ThemeProvider>
    </Provider>,
    container
  )
}

/** Start app */
document.startApp(document.getElementById('app'))
