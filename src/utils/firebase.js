import firebase from 'firebase/app'
import 'firebase/auth'
import 'firebase/firestore'

const prodConfig = {
  apiKey: 'AIzaSyAqA_4fYK-vcUol4tw_A1kzA7HlbS3cqtc',
  authDomain: 'starterkit-88536.firebaseapp.com',
  databaseURL: 'https://starterkit-88536.firebaseio.com',
  projectId: 'starterkit-88536',
  storageBucket: '',
  messagingSenderId: '63756283136'
}

if (!firebase.apps.length) {
  firebase.initializeApp(prodConfig)
}

export default firebase
