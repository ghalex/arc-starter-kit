import { createBrowserHistory } from 'history'
import { connectRouter, routerMiddleware, push, replace } from 'connected-react-router'

export default function createReactRouterPlugin () {
  const history = createBrowserHistory()
  const middleware = routerMiddleware(history)

  return {
    middleware,
    config: {
      models: {
        'router': {
          baseReducer: connectRouter(history)(state => null),
          state: {
            location: history.location,
            action: history.action
          },
          effects: {
            push,
            replace
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
