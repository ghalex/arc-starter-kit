import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'

import store from './redux'

document.startApp = function(container) {
  ReactDOM.render(<Provider store={store}>hello</Provider>, container)
}

/** Start app */
document.startApp(document.getElementById('app'))
