
import { observable, computed, action, toJS } from 'mobx'
import { db } from 'fb'

class AuthStore {
  @observable state = 'done'
  @observable user = null

  constructor (rootStore) {
    this.rootStore = rootStore
  }
}

export default AuthStore
