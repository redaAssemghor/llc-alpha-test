import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import PokemonsList from "./features/pokemon/PokemonsList";
import PokemonDetail from "./components/PokemonDetail";

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<PokemonsList />} />
        <Route path="/pokemon/:name" element={<PokemonDetail />} />
      </Routes>
    </Router>
  );
};

export default App;
