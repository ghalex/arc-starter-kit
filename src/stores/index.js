import { types, flow } from 'mobx-state-tree'
import { version } from '/../package.json'
import { ApiAuth } from 'utils/api'

const auth = new ApiAuth()
const user = {email: 'ghalex@gmail.com', password: '1234'}

const RootStore = types.model('RootStore', {
}).views(
  self => ({
    get version () {
      return version
    },
    get appStore () {
      return null
    }
  })
).actions(
  self => {
    const login = flow(function * (data) {
      try {
        const res = yield auth.login(user)
        console.log(res.data)
      } catch (e) {
        console.log(e.message)
      }
    })

    return {
      login
    }
  }
)

export default RootStore.create({})
