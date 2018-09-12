import React from 'react'
import ReactDOM from 'react-dom'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import { Provider } from 'react-redux'
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

  ReactDOM.render(
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <div>
          <Routes />
          <GlobalStyles />
        </div>
      </ThemeProvider>
    </Provider>,
    container
  )
}

/** Start app */
document.startApp(document.getElementById('app'))
