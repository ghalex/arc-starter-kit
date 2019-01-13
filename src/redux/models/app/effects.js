import firebase from 'utils/firebase'

const time = 3000

export default dispatch => {
  return {
    login: async({ email, password }) => {
      return firebase
        .auth()
        .signInWithEmailAndPassword(email, password)
        .then(res => {
          dispatch.app.addNotification({
            key: new Date().getTime() + Math.random(),
            message: 'You are successfully logged in!',
            options: {
              variant: 'success',
              autoHideDuration: time
            }
          })
          return res
        })
        .catch(e => {
          dispatch.app.serverError(e.message)
          dispatch.app.addNotification({
            key: new Date().getTime() + Math.random(),
            message: e.message,
            options: {
              variant: 'error',
              autoHideDuration: time
            }
          })
          console.log(e)
          return Promise.reject(e.message)
        })
    },
    loginWithGoogle: async() => {
      const provider = new firebase.auth.GoogleAuthProvider()
      return firebase.auth().signInWithPopup(provider)
    },
    loginWithFacebook: async() => {
      const provider = new firebase.auth.FacebookAuthProvider()
      return firebase.auth().signInWithPopup(provider)
    },
    logout: async() => {
      return firebase
        .auth()
        .signOut()
        .catch(e => {
          dispatch.app.serverError(e.message)
        })
    },
    signup: async({ name, email, password }) => {
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
    resetPassword: async({ email }) => {
      return firebase
        .auth()
        .sendPasswordResetEmail(email)
        .then(() => dispatch.app.passwordReset())
        .catch(e => {
          dispatch.app.serverError(e.message)
        })
    },
    changePassword: async({ password, code }) => {
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
