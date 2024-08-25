import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { pokemonActionsState } from "./types";

const likedPokemons =
  localStorage.getItem("likedPokemons") !== null
    ? JSON.parse(localStorage.getItem("likedPokemons") as string)
    : [];
const deletedPokemons =
  localStorage.getItem("deletedPokemons") !== null
    ? JSON.parse(localStorage.getItem("deletedPokemons") as string)
    : [];

const initialState: pokemonActionsState = {
  likedPokemons,
  deletedPokemons,
};

const pokemonActionsSlice = createSlice({
  name: "pokemonActions",
  initialState,
  reducers: {
    toggleLike: (state, action: PayloadAction<string>) => {
      const name = action.payload;
      const index = state.likedPokemons.indexOf(name);
      if (index !== -1) {
        state.likedPokemons.splice(index, 1);
      } else {
        state.likedPokemons.push(name);
      }
      localStorage.setItem(
        "likedPokemons",
        JSON.stringify(state.likedPokemons)
      );
    },
    deletePokemon: (state, action: PayloadAction<string>) => {
      const name = action.payload;
      state.deletedPokemons.push(name);
      localStorage.setItem(
        "deletedPokemons",
        JSON.stringify(state.deletedPokemons)
      );
    },
  },
});

export const { toggleLike, deletePokemon } = pokemonActionsSlice.actions;
export default pokemonActionsSlice.reducer;
