import React from 'react'
import PropTypes from 'prop-types'
import firebase from 'utils/firebase'

class FirebaseAutoLogin extends React.Component {
  static displayName = 'FirebaseAutoLogin'
  static defaultProps = {
    onNewUser: PropTypes.func
  }

  static propTypes = {}

  componentDidMount () {
    this.unlisten = firebase.auth().onAuthStateChanged((user) => {
      this.props.onNewUser(user)
    })
  }

  componentWillUnmount () {
    this.unlisten()
  }

  render () {
    return null
  }
}

export default FirebaseAutoLogin
