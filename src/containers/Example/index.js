import React from 'react'
import { compose } from 'recompose'
import { inject, observer } from 'mobx-react'
import { Example } from 'components'
import { didMount } from '@coderbox/hocs'

const ExampleContainer = observer(
  (props) => <Example {...props} />
)

const withStoreProps = inject(
  ({ store }, ownProps) => {
    return {
      version: store.version,
      onReady: () => {
        console.log('readyyyy')
        store.login()
      }
    }
  }
)

const withOnReady = didMount((props) => {
  props.onReady()
})

export default compose(
  withStoreProps,
  withOnReady
)(ExampleContainer)
