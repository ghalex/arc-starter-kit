import React from 'react'
import { SimpleTemplate } from 'templates'
import { Reset } from 'components'
import { compose } from 'recompose'
import { connect } from 'react-redux'

class ResetPage extends React.Component {
  render () {
    return (
      <SimpleTemplate>
        <Reset {...this.props} />
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
      onReset: data => dispatch.app.reset(data)
    }
  }
)

export default compose(
  withStoreProps
)(ResetPage)
