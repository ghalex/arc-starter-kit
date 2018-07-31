import React from 'react'
import { MainTemplate } from 'templates'
import { Todos } from 'containers'

const MainPage = ({ location }) => {
  return (
    <MainTemplate>
      <Todos />
    </MainTemplate>
  )
}

export default MainPage
