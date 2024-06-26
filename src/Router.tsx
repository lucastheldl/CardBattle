import { Routes, Route, Navigate } from "react-router-dom";
import { Deck } from "./pages/Deck";
import { Battles } from "./pages/Battles";
import { Home } from "./pages/Home";
import { Battle } from "./pages/Battle";
import { Register } from "./pages/auth/Register";
import { AuthContext } from "./context/AuthContext";
import { useContext } from "react";
import { Login } from "./pages/auth/Login";
import { CreateCard } from "./pages/CreateCard";
import { Shop } from "./pages/Shop";

export function Router() {
  const { user } = useContext(AuthContext);
  const { userFileRef } = useContext(AuthContext);

  return (
    <Routes>
      <Route path="/CardBattle/" element={<Home />} />
      <Route
        path="/CardBattle/deck"
        element={!user ? <Navigate to="/CardBattle/auth/register" /> : <Deck />}
      />
      <Route path="/CardBattle/battles" element={<Battles />} />
      <Route path="/CardBattle/battles/:id" element={<Battle />} />
      <Route
        path="/CardBattle/auth/register"
        element={!user ? <Register /> : <Navigate to="/CardBattle/" />}
      />
      <Route
        path="/CardBattle/auth/login"
        element={!user ? <Login /> : <Navigate to="/CardBattle/" />}
      />
      <Route
        path="/CardBattle/shop"
        element={user ? <Shop /> : <Navigate to="/CardBattle/" />}
      />
      <Route
        path="/CardBattle/createCard"
        element={
          userFileRef && userFileRef.role === "ADMIN" ? (
            <CreateCard />
          ) : (
            <Navigate to="/CardBattle/" />
          )
        }
      />
    </Routes>
  );
}
