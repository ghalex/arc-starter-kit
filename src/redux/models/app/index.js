import info from '/../package.json'
import init from './init'
import reducers from './reducers'
import effects from './effects'

export default {
  state: {
    currentUser: null,
    error: null,
    version: info.version,
    name: info.productName,
    ready: false,
    passwordReset: false,
    passwordChange: false,
    notifications: []
  },
  init,
  reducers,
  effects
}
