
import { observable, computed, action, toJS } from 'mobx'
import { db } from 'fb'

class TodosStore {
  @observable state = 'done'
  @observable todos = []

  constructor (rootStore) {
    this.rootStore = rootStore

    db.todos.onSnapshot((snapshot) => {
      this.todos.clear()
      snapshot.forEach(doc => this.todos.push(doc.data()))
    })
  }

  @computed
  get json () {
    return toJS(this.todos)
  }

  @action
  add = (name) => {
    return db.todos.add({ name })
  }

  @action
  update = (id, name) => {
    return db.todos.doc(id).set({ name })
  }
}

export default TodosStore
