import firebase from 'utils/firebase'

let unlisten = null

export default dispatch => {
  if (unlisten) unlisten()

  unlisten = firebase.auth().onAuthStateChanged(user => {
    dispatch({ type: 'app/changeUser', payload: user })
  })
}
