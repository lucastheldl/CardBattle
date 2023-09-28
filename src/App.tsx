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

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GameContextProvider>
        <CardContextProvider>
          <ParallaxProvider>
            <BrowserRouter>
              <GlobalStyle />
              <Header />
              <Router />
              <Footer />
            </BrowserRouter>
          </ParallaxProvider>
        </CardContextProvider>
      </GameContextProvider>
    </ThemeProvider>
  );
}

export default App;
