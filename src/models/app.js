import firebase from 'utils/firebase'
import pk from '/../package.json'

export default {
  state: {
    currentUser: null,
    error: null,
    version: pk.version,
    name: pk.productName
  },
  reducers: {
    switchUser: (state, payload) => {
      return {
        ...state,
        currentUser: payload
      }
    },
    serverError: (state, payload) => {
      return {
        ...state,
        error: payload
      }
    }
  },
  effects: (dispatch) => ({
    login: async ({ email, password }) => {
      return firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .catch(e => {
          dispatch.app.serverError(e.message)
        })
    },
    signup: async ({ name, email, password }) => {

    }
  })
}
