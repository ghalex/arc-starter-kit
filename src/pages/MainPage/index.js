import React from 'react'
import { MainTemplate } from 'templates'
import { Welcome } from 'components'

const MainPage = ({ location }) => {
  return (
    <MainTemplate>
      <Welcome title='Welcome to Company' subtitle='Log In'>
        asdf
      </Welcome>
    </MainTemplate>
  )
}

export default MainPage
