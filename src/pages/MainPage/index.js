import React from 'react'
import { DashboardTemplate } from 'templates'
import { connect } from 'react-redux'

const MainPage = props => {
  return <DashboardTemplate>main page</DashboardTemplate>
}

const withStoreProps = connect(
  state => {
    return {}
  },
  (dispatch, { navigate }) => {
    return {}
  }
)

export default withStoreProps(MainPage)
