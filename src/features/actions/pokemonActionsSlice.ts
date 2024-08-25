import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface LikedPokemonsState {
  likedPokemons: Record<number, boolean>;
  deletedPokemons: string[];
}

const initialState: LikedPokemonsState = {
  likedPokemons: {},
  deletedPokemons: [],
};

const likedPokemonsSlice = createSlice({
  name: "likedPokemons",
  initialState,
  reducers: {
    toggleLike: (state, action: PayloadAction<number>) => {
      const id = action.payload;
      state.likedPokemons[id] = !state.likedPokemons[id];
    },
    deletePokemon: (state, action: PayloadAction<string>) => {
      const name = action.payload;
      state.deletedPokemons.push(name);
    },
  },
});

export const { toggleLike, deletePokemon } = likedPokemonsSlice.actions;
export default likedPokemonsSlice.reducer;
