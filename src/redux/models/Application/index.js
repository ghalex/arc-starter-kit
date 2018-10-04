import firebase from 'utils/firebase'
import info from '/../package.json'

import reducers from './reducers'
import effects from './effects'

let unlisten = null

export default {
  state: {
    currentUser: null,
    error: null,
    version: info.version,
    name: info.productName,
    ready: false,
    passwordReset: false,
    passwordChange: false
  },
  reducers: reducers,
  effects: effects,
  init: dispatch => {
    if (unlisten) unlisten()

    unlisten = firebase
      .auth()
      .onAuthStateChanged((user) => {
        // if user is null it will change to null
        // and logout
        dispatch({ type: 'app/changeUser', payload: user })
      })
  }
}
