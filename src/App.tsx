import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/default";
import { GlobalStyle } from "./styles/global";
import { BrowserRouter } from "react-router-dom";
//components
import { Header } from "./components/Header";
import { Router } from "./Router";
import { DeckContextProvider } from "./context/DeckContext";
import { Footer } from "./components/Footer";

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <DeckContextProvider>
        <BrowserRouter>
          <GlobalStyle />
          <Header />
          <Router />
          <Footer />
        </BrowserRouter>
      </DeckContextProvider>
    </ThemeProvider>
  );
}

export default App;
