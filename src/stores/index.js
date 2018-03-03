import { types } from 'mobx-state-tree'
import { version } from '/../package.json'

const RootStore = types.model('RootStore', {
}).views(
  self => ({
    get version () {
      return version
    }
  })
).actions(
  self => {
    return {
      sayHello: (name) => {
        console.log(`Hello: ${name}`)
      }
    }
  }
)

export default RootStore.create({})
