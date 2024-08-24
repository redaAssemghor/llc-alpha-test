import { configureStore } from "@reduxjs/toolkit";
import { pokemonApi } from "../features/pokemon/pokemonApi";

export const store = configureStore({
  reducer: {
    [pokemonApi.reducerPath]: pokemonApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(pokemonApi.middleware),
});

export type RootedState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
