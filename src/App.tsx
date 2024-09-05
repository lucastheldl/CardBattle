import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/default";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter } from "react-router-dom";
//components
import { Header } from "./components/Header";
import { Router } from "./Router";
import { CardContextProvider } from "./context/CardContext";
import { Footer } from "./components/Footer";
import { GameContextProvider } from "./context/GameContext";
import { ParallaxProvider } from "react-scroll-parallax";
import { AuthContextProvider } from "./context/AuthContext";
import { StyleSheetManager } from "styled-components";
import isPropValid from "@emotion/is-prop-valid";

function App() {
  function shouldForwardProp(propName: any, target: any) {
    if (typeof target === "string") {
      // For HTML elements, forward the prop if it is a valid HTML attribute
      return isPropValid(propName);
    }

    return true;
  }
  return (
    <StyleSheetManager shouldForwardProp={shouldForwardProp}>
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />
        <AuthContextProvider>
          <CardContextProvider>
            <GameContextProvider>
              <ParallaxProvider>
                <BrowserRouter>
                  <Header />
                  <Router />
                  <Footer />
                </BrowserRouter>
              </ParallaxProvider>
            </GameContextProvider>
          </CardContextProvider>
        </AuthContextProvider>
      </ThemeProvider>
    </StyleSheetManager>
  );
}

export default App;
