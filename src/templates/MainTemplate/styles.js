import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
  box-sizing: border-box;
  background-color: #f1f1f1;
`

export const Header = styled.header`
`

export const Content = styled.section`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1150px;
`

export const Footer = styled.footer`
  margin-top: auto;
  text-align: center;

  & .version {
    margin: 1rem;
  }
`
