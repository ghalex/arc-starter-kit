import { createGlobalStyle } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  html, body {
    font-family: ${p => p.theme.fonts.primary};
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: #f1f1f1;
  }
`

export default GlobalStyles
