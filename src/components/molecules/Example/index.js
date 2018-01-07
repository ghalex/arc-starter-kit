import React from 'react'
import cx from 'classnames'
import * as s from './styles'
import { Button, Input, Icon } from 'semantic-ui-react'

const Component = ({ version, ...props }) => {
  let className = cx('example', props.className)

  return (
    <s.Container {...props} className={className}>
      <Button>Hello</Button>
      <Input icon placeholder='Search...'>
        <input />
        <Icon name='search' />
      </Input>
    </s.Container>
  )
}

Component.displayName = 'Example'
Component.defaultProps = {
}

export default Component
