import React from 'react'
import cx from 'classnames'
import { StyledLogo } from './styles'

class Logo extends React.Component {
  static displayName = 'Logo'
  static defaultProps = {
  }

  static propTypes = {
  }

  render () {
    let className = cx('logo', this.props.className)
    let awsBucket = 'https://s3-eu-west-1.amazonaws.com/coderbox'
    let { isWhite, ...props } = this.props

    return (
      <a href={props.href}>
        <StyledLogo {...props} src={`${awsBucket}/logos/coderbox${isWhite ? '-white' : '-blue'}.png`} className={className} />
      </a>
    )
  }
}

export default Logo
