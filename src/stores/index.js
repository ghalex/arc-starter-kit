import { action, computed } from 'mobx'
import { version } from '/../package.json'
import TodosStore from './TodosStore'
import AuthStore from './AuthStore'

class RootStore {
  constructor () {
    this.auth = new AuthStore(this)
    this.todos = new TodosStore(this)
  }

  @computed
  get version () {
    return version
  }

  @action
  sayHello (name) {
    console.log(`Hello: ${name}`)
  }
}

export default new RootStore()
