import React from 'react'
import cx from 'classnames'
import { Logo } from 'components'
import { StyledExample } from './styles'

class Example extends React.Component {
  static displayName = 'Example'
  static defaultProps = {
  }

  static propTypes = {
  }

  render () {
    let className = cx('example', this.props.className)
    let { hide, ...props } = this.props

    return (
      <StyledExample hide={hide} {...props} className={className}>
        <Logo />
      </StyledExample>
    )
  }
}

export default Example
