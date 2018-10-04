import React from 'react'
import { SimpleTemplate } from 'templates'
import { PageSpinner } from 'components'

class LoadingPage extends React.Component {
  render () {
    return (
      <SimpleTemplate>
        <PageSpinner label='Loading please wait...' />
      </SimpleTemplate>
    )
  }
}

export default LoadingPage
