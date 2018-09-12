import React from 'react'
import { SimpleTemplate } from 'templates'
import { Welcome, Logo, FormLogin } from 'components'
import { compose } from 'recompose'
import { connect } from 'react-redux'
import { Link, withRouter } from 'react-router-dom'

class LoginPage extends React.Component {
  render () {
    const { error, onLogin, onAnonymous, onLoginWithGoogle, onLoginWithFacebook } = this.props
    return (
      <SimpleTemplate>
        <Welcome
          logo={<Logo />}
          title='Welcome to'
          subtitle='StarterKit'
          error={error}
          info={
            <span>
              Having trouble log in? You can {' '}
              <Link to='/reset'>reset your password here.</Link>
            </span>
          } >
          <FormLogin
            onSubmit={onLogin}
            onAnonymous={onAnonymous}
            onGoogle={onLoginWithGoogle}
            onFacebook={onLoginWithFacebook} />
        </Welcome>
        <div>
          Don't have an account ? {' '}
          <Link className='white' to='/signup'>Sign up now!</Link>
        </div>
      </SimpleTemplate>
    )
  }
}

const withStoreProps = connect(
  state => {
    return {
      error: state.app.error
    }
  },
  dispatch => {
    return {
      onLogin: data => {
        return dispatch.app.login(data)
      }
    }
  }
)
// const withStoreProps = inject(({ store }, ownProps) => {
//   const { auth } = store
//   const { history } = ownProps

//   return {
//     error: auth.error,
//     newUser: auth.newUser,
//     onLogin: ({ email, password }) => {
//       return auth
//         .login(email, password)
//         .then(result => {
//           if (result && result.user) {
//             history.replace('/main')
//           }
//         })
//     },
//     onLoginWithFacebook: () => true,
//     onLoginWithGoogle: () => {
//       return auth
//         .loginWithGoogle()
//         .then(result => {
//           history.replace('/main')
//         })
//     }
//   }
// })

export default compose(
  withStoreProps
)(LoginPage)
