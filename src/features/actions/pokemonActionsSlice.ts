import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { pokemonActionsState } from "./types";

const initialState: pokemonActionsState = {
  likedPokemons: [],
  deletedPokemons: [],
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
    },
    deletePokemon: (state, action: PayloadAction<string>) => {
      const name = action.payload;
      state.deletedPokemons.push(name);
    },
  },
});

export const { toggleLike, deletePokemon } = pokemonActionsSlice.actions;
export default pokemonActionsSlice.reducer;
