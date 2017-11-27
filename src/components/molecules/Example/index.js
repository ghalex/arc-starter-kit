import React from 'react'
import cx from 'classnames'
import * as s from './styles'
import { Logo } from 'components'

const Component = ({ version, ...props }) => {
  let className = cx('example', props.className)

  return (
    <s.Container {...props} className={className}>
      <Logo />
      <div>example: {version}</div>
    </s.Container>
  )
}

Component.displayName = 'Example'
Component.defaultProps = {
}

export default Component
