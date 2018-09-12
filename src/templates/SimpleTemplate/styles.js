import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 100vh;

  & > .icon.close {
    position: absolute;
    right: 15px;
    top: 15px;
    cursor: pointer;

    &:hover { opacity: 0.8; }
  }
`

export const Content = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex: 1;
`

export const Footer = styled.footer`
  text-align: center;
  margin-bottom: 10px;
`
