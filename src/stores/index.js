import { types, flow } from 'mobx-state-tree'
import { version } from '/../package.json'
import { ApiAuth } from 'utils/api'

const auth = new ApiAuth()

const RootStore = types.model('RootStore', {
  jwt: types.maybe(types.string),
  error: types.maybe(types.string)
}).views(
  self => ({
    get version () {
      return version
    }
  })
).actions(
  self => {
    const login = flow(function * (data) {
      try {
        const res = yield auth.login(data)
        self.jwt = res.data
      } catch (e) {
        self.error = e.message
      }
    })

    return {
      login
    }
  }
)

export default RootStore.create({})
