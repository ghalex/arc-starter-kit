import React from 'react'
import { version } from '/../package.json'
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
      <Footer>
        <div className='version'>© 2017<br /> <a href='#'>v{version}-beta</a></div>
        {footer}
      </Footer>
    </Wrapper>
  )
}

export default PageTemplate
