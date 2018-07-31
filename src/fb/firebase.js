import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const prodConfig = {
  apiKey: 'YOUR_API_KEY',
  authDomain: 'YOUR_AUTH_DOMAIN',
  databaseURL: 'YOUR_DATABASE_URL',
  projectId: 'YOUR_PROJECT_ID',
  storageBucket: '',
  messagingSenderId: 'YOUR_MESSAGING_SENDER_ID'
}

if (!firebase.apps.length) {
  firebase.initializeApp(prodConfig)
}

export default firebase
