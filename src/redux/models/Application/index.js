import firebase from 'utils/firebase'
import info from '/../package.json'

export default {
  state: {
    currentUser: null,
    error: null,
    version: info.version,
    name: info.productName,
    ready: false
  },
  reducers: {
    switchUser: (state, payload) => {
      return {
        ...state,
        error: null,
        ready: true,
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
    loginWithGoogle: async () => {
      const provider = new firebase.auth.GoogleAuthProvider()
      return firebase.auth().signInWithPopup(provider)
    },
    loginWithFacebook: async () => {
      const provider = new firebase.auth.FacebookAuthProvider()
      return firebase.auth().signInWithPopup(provider)
    },
    logout: async () => {
      return firebase
        .auth()
        .signOut()
        .catch(e => {
          dispatch.app.serverError(e.message)
        })
    },
    signup: async ({ name, email, password }) => {
      return firebase
        .createUserWithEmailAndPassword(email, password)
        .then(credential => {
          if (name) {
            credential.user.updateProfile({ displayName: name })
            return credential
          }

          return credential
        })
    }
  })
}
