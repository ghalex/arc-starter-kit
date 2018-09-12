import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { MainTemplate } from 'templates'

const MainPage = ({ name, version, onGo }) => {
  return (
    <MainTemplate
      header={<div>Header</div>}
      footer={<div className='version'>© 2018 {name}<br /> <a href='#'>v{version}</a></div>}>
      Welcome to StarterKIT
      <button onClick={() => onGo('/login')}>Test</button>
    </MainTemplate>
  )
}

const withStoreProps = connect(
  state => {
    console.log(state)
    return {
      name: state.app.name,
      version: state.app.version
    }
  },
  dispatch => {
    return {
      onGo: to => {
        dispatch.router.replace(to)
      }
    }
  }
)

export default compose(
  withStoreProps
)(MainPage)
