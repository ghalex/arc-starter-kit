import React from 'react'
import { Router } from 'react-router-dom'
import { connect } from 'react-redux'

class ReduxRouter extends React.Component {
  static displayName = 'ReduxRouter'
  static defaultProps = {}

  static propTypes = {}

  constructor (props) {
    super(props)
    this.unlisten = props.history.listen(props.onLocationChanged)
  }

  componentWillUnmount () {
    this.unlisten()
  }

  render () {
    let { history, children, ...props } = this.props

    return (
      <Router history={history} {...props}>
        {children}
      </Router>
    )
  }
}

const withStoreProps = connect(
  state => state,
  dispatch => {
    return {
      onLocationChanged: (location, action) => {
        return dispatch.router.changeLocation({ location, action })
      }
    }
  }
)

export default withStoreProps(ReduxRouter)
