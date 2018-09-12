import React from 'react'
import {
  Wrapper,
  Header,
  Content,
  Footer
} from './styles'

const PageTemplate = ({ header, children, footer, ...props }) => {
  return (
    <Wrapper {...props}>
      <Header>{header}</Header>
      <Content>{children}</Content>
      <Footer>{footer}</Footer>
    </Wrapper>
  )
}

export default PageTemplate
