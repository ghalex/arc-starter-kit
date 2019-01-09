import React from 'react'
import { SimpleTemplate } from 'templates'
import styled from 'styled-components'
import { Paper, Typography, Grid } from '@material-ui/core'
import { compose } from 'recompose'
import { connect } from 'react-redux'

const BoxPaper = styled(Paper)`
  width: 100%;
  height: 200px;
`

class LoginPage extends React.Component {
  render() {
    return (
      <SimpleTemplate>
        <Grid
          container
          style={{ border: '1px solid red', width: 600 }}
          spacing={16}
        >
          <Grid item xs={12}>
            <BoxPaper />
          </Grid>
          <Grid item xs={10}>
            <BoxPaper />
          </Grid>
          <Grid item xs={2}>
            <BoxPaper />
          </Grid>
        </Grid>
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
  (dispatch, { history }) => {
    return {
      onLogin: data => dispatch.app.login(data).then(() => history.push('/')),
      onLoginWithGoogle: () =>
        dispatch.app.loginWithGoogle().then(() => history.push('/')),
      onLoginWithFacebook: () =>
        dispatch.app.loginWithFacebook().then(() => history.push('/'))
    }
  }
)

export default compose(withStoreProps)(LoginPage)
