import React from 'react'
import cx from 'classnames'
import { TodosContainer } from './styles'

class Todos extends React.Component {
  static displayName = 'Example'
  static defaultProps = {
  }

  static propTypes = {
  }

  render () {
    let className = cx('todos', this.props.className)
    let { todos, ...props } = this.props
    console.log(todos)
    return (
      <TodosContainer {...props} className={className}>
        {todos.map((todo, index) => {
          return <p key={index}>{todo.title}</p>
        })}
      </TodosContainer>
    )
  }
}

export default Todos
