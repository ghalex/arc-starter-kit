export default () => {
  let callbacks = []
  return {
    onModel(model) {
      if (model.init) {
        callbacks.push(model.init)
      }
    },
    onStoreCreated(store) {
      callbacks.forEach(c => c(store.dispatch))
    }
  }
}
