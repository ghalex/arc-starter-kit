import React from 'react'
import { MainTemplate } from 'templates'
import { Example } from 'containers'

const MainPage = ({ location }) => {
  return (
    <MainTemplate>
      <Example />
    </MainTemplate>
  )
}

export default MainPage
