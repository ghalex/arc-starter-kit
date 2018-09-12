import React from 'react'
import { version } from '/../package.json'
import { Icon } from 'zebbra/components'
import { Wrapper, Content, Footer } from './styles'

const SimpleTemplate = ({ children, onClose, ...props }) => {
  return (
    <Wrapper {...props}>
      {onClose && <Icon circular className='close' name='close' onClick={onClose} />}
      <Content>{children}</Content>
      <Footer>
        © 2018 StarterKit, <a href='#'>v{version}</a>
      </Footer>
    </Wrapper>
  )
}

export default SimpleTemplate
