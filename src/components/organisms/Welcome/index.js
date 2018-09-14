import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { Box, Title, Flex } from 'zebbra/components'

/**
 * Layout used to render a Login, Signup or Reset form.
 *
 * @name WelcomeLayout
 * @param {string} title
 * @param {string} subtitle
 * @param {element} info
 * @render react
 *
 * @example
 *  <WelcomeLayout title='Welcome to Company' subtitle='Log In'>
 *    <FormLogin onSubmit={data => console.log(data)} />
 *  </WelcomeLayout>
 *
 */
class WelcomeLayout extends React.Component {
  static displayName = 'Login'
  static defaultProps = {
    title: 'Company Name',
    subtitle: 'Log In',
    logo: null,
    info: null
  }

  static propTypes = {
    logo: PropTypes.element,
    info: PropTypes.element,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    error: PropTypes.string
  }

  renderError () {
    let { error } = this.props
    if (!error) return null

    return (
      <Box
        bg='danger'
        color='white'
        border='none'
        justifyContent='center'
        alignItems='center'
        p={2}
        mb={2}
      >
        {error}
      </Box>
    )
  }

  render () {
    let className = cx('login', this.props.className)
    let { logo, children, title, subtitle, info, error, ...props } = this.props

    return (
      <Flex
        flexDirection='column'
        mx={[2, 2, 0]}
        mb={2}
        width={['auto', 'auto', 750]}
        {...props}
        className={className}>

        {this.renderError()}
        <Box
          p={0}
          bg='#f8f8f8'
          flexDirection={['column', 'column', 'row']}
          className='box-container'
        >
          <Flex flex={1} justifyContent='space-between' flexDirection='column' p='2em' bg='white'>
            <div>
              {logo}
              {title && <Title fontSize={36} mb={-3} thin>{title}</Title>}
              {subtitle && <Title fontSize={36} mb={5}>{subtitle}</Title>}
            </div>
            <p>{info}</p>
          </Flex>
          <Flex flex={1} alignItems='center' justifyContent='center' flexDirection='column' p='2em'>
            {children}
          </Flex>
        </Box>
      </Flex>
    )
  }
}

export default WelcomeLayout
