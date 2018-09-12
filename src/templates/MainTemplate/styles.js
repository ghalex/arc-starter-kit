import styled from 'styled-components'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`

export const Header = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  padding: 0.5em;
  box-sizing: border-box;
  height: 60px;
  border-bottom: 1px solid #CCC;
`

export const Content = styled.section`
  width: 100%;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1150px;
  padding: 1rem;
`

export const Footer = styled.footer`
  width: 100%;
  margin-top: auto;
  border-top: 1px solid #CCC;
  text-align: center;

  & .version {
    margin: 1rem;
  }
`
