import React from 'react'
import cx from 'classnames'
import * as s from './styles'

const Component = ({ isWhite, ...props }) => {
  let className = cx('logo', props.className)
  let awsBucket = 'https://s3.eu-central-1.amazonaws.com/dreaminternship'

  return (
    <a href={props.href}>
      <s.Logo
        {...props}
        src={`${awsBucket}/logos/dreaminternship150${isWhite ? '-white' : ''}.png`}
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
