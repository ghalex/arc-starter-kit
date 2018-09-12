import React from 'react'
import { SimpleTemplate } from 'templates'
import { Welcome, Logo, FormSignup } from 'components'
import { compose } from 'recompose'
import { Link, withRouter } from 'react-router-dom'

class SignupPage extends React.Component {
  render () {
    const { error, onSignup } = this.props
    return (
      <SimpleTemplate>
        <Welcome
          logo={<Logo />}
          title='Create your'
          subtitle='free account'
          error={error}
          info={
            <span>
              Having trouble log in? You can {' '}
              <Link to='/reset'>reset your password here.</Link>
            </span>
          } >
          <FormSignup onSubmit={onSignup} />
        </Welcome>
        <div>
          Already have an account with us? {' '}
          <Link className='white' to='/login'>Log in instead.</Link>
        </div>
      </SimpleTemplate>
    )
  }
}

// const withStoreProps = inject(({ store }, ownProps) => {
//   const { auth } = store
//   const { history } = ownProps

//   return {
//     error: auth.error,
//     onSignup: ({ name, email, password }) => {
//       return auth
//         .signup(name, email, password)
//         .then(result => {
//           console.log('result', result)
//           if (result) {
//             history.replace('/main')
//           }
//         })
//     },
//     onClose: () => {
//       history.replace('/main')
//     }
//   }
// })

export default SignupPage
