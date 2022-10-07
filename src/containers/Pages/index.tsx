import React from "react";
import {
  Route,
  Routes,
} from "react-router-dom";

import Summary from "./Summary";
import Login from "./Login";
import Todo from "./Todo";
import StarWars from "./StarWars";
import ErrorPage404 from "./ErrorPages/Error404";
import StarWarsDetailsContainer from "./StarWars/StarWarsDetailsContainer";
import Pokemons from "./Pokemons";

const PagesRoute = () => {
  return (
    <Routes>
      <Route path="/" element={<Summary />} />
      <Route path="login-form" element={<Login />} />
      <Route path="todo-list" element={<Todo />} />
      <Route path="star-wars/:pageNumber" element={<StarWars />} />
      <Route path="star-wars/:pageNumber/:creatureId" element={<StarWarsDetailsContainer />} />
      <Route path="pokemons/:pageNumber" element={<Pokemons />} />
      <Route path="*" element={<ErrorPage404 />} />
    </Routes>
  );
};

export default PagesRoute;
