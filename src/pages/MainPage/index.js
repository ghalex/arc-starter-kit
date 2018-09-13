import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { Button, Title } from 'zebbra/components'
import { MainTemplate } from 'templates'

const MainPage = ({ appName, appVersion, user, onLogout }) => {
  return (
    <MainTemplate
      header={<div>Header</div>}
      footer={<div className='version'>© 2018 {appName}<br /> <a href='#'>v{appVersion}</a></div>}>
      <Title>Welcome back </Title>
      <Title subtitle>{user.displayName}</Title>
      <Button variant='danger' icon='sign-out' m={2} onClick={onLogout}>Logout</Button>
    </MainTemplate>
  )
}

const withStoreProps = connect(
  (state) => {
    return {
      appName: state.app.name,
      appVersion: state.app.version,
      user: state.app.currentUser
    }
  },
  (dispatch, { history }) => {
    return {
      onLogout: () => dispatch.app.logout()
    }
  }
)

export default compose(
  withStoreProps
)(MainPage)
