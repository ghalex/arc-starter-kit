import { types } from 'mobx-state-tree'
import { version } from '/../package.json'

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
  self => ({

  })
)

export default RootStore.create({})
