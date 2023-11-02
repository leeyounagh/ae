import * as styledComponents from "styled-components";

import { Theme } from "./Theme";

const {
  default: styled,
  css,
  ThemeProvider,
} = styledComponents as styledComponents.ThemedStyledComponentsModule<Theme>;

export { css, ThemeProvider };

export default styled;
