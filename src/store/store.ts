import { configureStore } from "@reduxjs/toolkit";
import { pokemonApi } from "../features/pokemon/pokemonApi";
import likedPokemonsReducer from "../features/actions/pokemonActionsSlice";

export const store = configureStore({
  reducer: {
    [pokemonApi.reducerPath]: pokemonApi.reducer,
    likedPokemons: likedPokemonsReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
});

export type RootedState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
