import React from 'react'
import { compose } from 'recompose'
import { inject, observer } from 'mobx-react'
import { Example } from 'components'

const ExampleContainer = observer(
  (props) => <Example {...props} />
)

const withStoreProps = inject(
  ({ store }, ownProps) => {
    return {
      version: store.version
    }
  }
)

export default compose(
  withStoreProps
)(ExampleContainer)
