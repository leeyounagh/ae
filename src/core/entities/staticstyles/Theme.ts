// // 폰트나 색상 지정하는곳
// import baseStyled, {
//   css,
//   CSSProp,
//   ThemedStyledInterface,
//   createGlobalStyle,
// } from "styled-components";
// 폰트나 색상 지정하는곳
import baseStyled, { ThemedStyledInterface } from 'styled-components'

const colors = {
  main: 'FFE4E1',
  white: '#FFFFFF',
  black: '#000000',
}

const fontSizes: string[] = []

const theme = {
  colors,
  fontSizes,
}

export type Theme = typeof theme
export const styled = baseStyled as ThemedStyledInterface<Theme>
export default theme
