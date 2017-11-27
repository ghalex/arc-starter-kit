import React from 'react'
import { compose } from 'recompose'
import { inject, observer } from 'mobx-react'

const ExampleContainer = observer(
  (props) => <div {...props}>example</div>
)

const withStoreProps = inject(
  ({ store }, ownProps) => {
    return {
    }
  }
)

export default compose(
  withStoreProps
)(ExampleContainer)
