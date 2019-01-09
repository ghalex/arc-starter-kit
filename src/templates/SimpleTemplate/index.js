import React from 'react'
import PropTypes from 'prop-types'
import { version } from '/../package.json'
import { Wrapper, Content, Footer } from './styles'

const SimpleTemplate = ({ children, ...props }) => {
  return (
    <Wrapper {...props}>
      <Content>{children}</Content>
      <Footer>
        © 2018 StarterKit, <a href="#">v{version}</a>
      </Footer>
    </Wrapper>
  )
}

SimpleTemplate.propTypes = {
  children: PropTypes.node
}

export default SimpleTemplate
