import firebase from './firebase'

const firestore = firebase.firestore()
const settings = { timestampsInSnapshots: true }

firestore.settings(settings)

const todos = firestore.collection('todos')

export {
  firestore,
  todos
}
