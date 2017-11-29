import React from 'react'
import cx from 'classnames'
import * as s from './styles'

const Component = ({ isWhite, ...props }) => {
  let className = cx('logo', props.className)
  let awsBucket = 'https://s3-eu-west-1.amazonaws.com/coderbox'

  return (
    <a href={props.href}>
      <s.Logo
        {...props}
        src={`${awsBucket}/logos/coderbox${isWhite ? '-white' : '-blue'}.png`}
        className={className}
      />
    </a>
  )
}

Component.displayName = 'Logo'
Component.defaultProps = {
  isWhite: false,
  withSize: 'normal'
}

export default Component
