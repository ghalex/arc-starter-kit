import React from 'react'
import ReactDOM from 'react-dom'
import { createGlobalStyle, ThemeProvider } from 'styled-components'
import theme from './theme'
import Routes from './routes'

// mobx
import { Provider as MobxProvider } from 'mobx-react'

// stores
import rootStore from 'stores'

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
    <MobxProvider store={rootStore}>
      <ThemeProvider theme={theme}>
        <div>
          <Routes />
          <GlobalStyles />
        </div>
      </ThemeProvider>
    </MobxProvider>,
    container
  )
}

/** Start app */
document.startApp(document.getElementById('app'))
