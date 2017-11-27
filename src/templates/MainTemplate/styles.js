import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  box-sizing: border-box;
  background-color: #f1f1f1;
`

export const Header = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 999;
`

export const Content = styled.section`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  max-width: 1150px;
  margin: 70px auto 90px auto;
`

export const Footer = styled.footer`
  margin-top: auto;
  text-align: center;

  & .version {
    font-family: ${p => p.theme.fonts.primary};
    margin: 1rem;
  }
`
