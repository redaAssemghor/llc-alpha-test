export interface likedPokemons {
  [id: number]: boolean;
}

export interface pokemonActionsState {
  likedPokemons: string[];
  deletedPokemons: string[];
}
