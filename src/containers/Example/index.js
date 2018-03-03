import React from 'react'
import { compose, lifecycle } from 'recompose'
import { inject, observer } from 'mobx-react'
import { Example } from 'components'

const ExampleContainer = observer(
  (props) => <Example {...props} />
)

const withStoreProps = inject(
  ({ store }, ownProps) => {
    return {
      version: store.version,
      onReady: () => {
        console.log('container mounted')
      }
    }
  }
)

const withOnReady = lifecycle({
  componentDidMount () {
    this.props.onReady()
  }
})

export default compose(
  withStoreProps,
  withOnReady
)(ExampleContainer)
