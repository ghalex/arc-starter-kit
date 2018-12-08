export default () => {
  let subscriptions = {}

  return {
    onModel(model) {
      Object.keys(model.subscriptions || {}).forEach(matcher => {
        if (typeof model.subscriptions[matcher] !== 'function') {
          throw new Error(
            `Subscription matcher in ${
              model.name
            } (${matcher}) must be a function`
          )
        }

        subscriptions[matcher] = subscriptions[matcher] || []
        subscriptions[matcher].push(model.subscriptions[matcher])
      })
    },
    onStoreCreated(store) {},
    middleware: store => next => action => {
      const { type } = action
      const result = next(action)

      if (subscriptions[type]) {
        subscriptions[type].forEach(fn => {
          fn(store.getState(), action.payload, store.dispatch)
        })
      }

      return result
    }
  }
}
