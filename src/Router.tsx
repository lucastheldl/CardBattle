import { Routes, Route } from "react-router-dom";
import { Deck } from "./pages/Deck";
import { Battles } from "./pages/Battles";
import { Home } from "./pages/Home";

export function Router() {
  return (
    <Routes>
      <Route path="/CardBattle/" element={<Home />} />
      <Route path="/CardBattle/deck" element={<Deck />} />
      <Route path="/CardBattle/battles" element={<Battles />} />
      {/* <Route path="/CardBattle/battles/:id" element={<Battle />} /> */}
    </Routes>
  );
}
