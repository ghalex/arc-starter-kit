/* eslint-env es6 */
import firebase from 'utils/firebase'

export default dispatch => {
  return {
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
    },
    resetPassword: async ({ email }) => {
      return firebase
        .auth()
        .sendPasswordResetEmail(email)
        .then(() => dispatch.app.passwordReset())
        .catch(e => {
          dispatch.app.serverError(e.message)
        })
    },
    changePassword: async ({ password, code }) => {
      return firebase
        .auth()
        .confirmPasswordReset(code, password)
        .then(() => dispatch.app.passwordChange())
        .catch(e => {
          dispatch.app.serverError(e.message)
        })
    }
  }
}
