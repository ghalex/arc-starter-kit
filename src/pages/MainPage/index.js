import React from 'react'
import { connect } from 'react-redux'
import { compose } from 'recompose'
import { MainTemplate } from 'templates'

const MainPage = ({ name, version }) => {
  return (
    <MainTemplate
      header={<div>Header</div>}
      footer={<div className='version'>© 2018 {name}<br /> <a href='#'>v{version}</a></div>}>
      Welcome to StarterKIT
    </MainTemplate>
  )
}

const withStoreProps = connect(
  state => {
    return {
      name: state.app.name,
      version: state.app.version
    }
  },
  dispatch => {
    return {

    }
  }
)

export default compose(
  withStoreProps
)(MainPage)
