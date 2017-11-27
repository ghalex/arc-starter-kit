import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'styled-components'
import theme from './theme'
import Routes from './routes'

// mobx
import { Provider as MobxProvider } from 'mobx-react'

// stores
import rootStore from 'stores'

document.startApp = function (container) {
  ReactDOM.render(
    <MobxProvider {...rootStore}>
      <ThemeProvider theme={theme}>
        <Routes />
      </ThemeProvider>
    </MobxProvider>,
    container
  )
}

/** Start app */
document.startApp(document.getElementById('app'))
