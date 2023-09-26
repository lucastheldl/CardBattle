import "styled-components";
import { defaultTheme } from "../styles/default";

type ThemeType = typeof defaultTheme;

declare module "styled-components" {
  //lembrar que precisa ser styled-components exatamente
  export interface DefaultTheme extends ThemeType {}
}
