import React from 'react'
import { compose, lifecycle } from 'recompose'
import { inject, observer } from 'mobx-react'
import { Todos } from 'components'

const ExampleContainer = observer(
  (props) => <Todos {...props} />
)

const withStoreProps = inject(
  ({ store }, ownProps) => {
    return {
      version: store.version,
      todos: store.todos.json,
      onReady: () => {
        store.sayHello('Starter Kit!')
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
