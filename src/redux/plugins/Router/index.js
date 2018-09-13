import { createBrowserHistory } from 'history'

export default () => {
  const history = createBrowserHistory()

  return {
    config: {
      models: {
        'router': {
          state: {
            location: history.location,
            action: history.action
          },
          reducers: {
            changeLocation: (state, { location, action }) => {
              return {
                location,
                action
              }
            }
          },
          effects: {
            replace: location => history.replace(location),
            push: location => history.push(location),
            goBack: location => history.goBack(location),
            goForward: location => history.goForward(location)
          }
        }
      }
    },
    onStoreCreated (store) {
      return {
        history
      }
    }
  }
}
