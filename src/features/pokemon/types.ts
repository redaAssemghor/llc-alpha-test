interface Ability {
  ability: {
    name: string;
    url: string;
  };
}

export interface Type {
  type: {
    name: string;
    url: string;
  };
}

export interface Pokemon {
  name: string;
  id: number;
  height: number;
  weight: number;
  abilities: Ability[];
  sprites: {
    front_default: string;
  };
  types: Type[];
}

export interface PokemonResponse {
  results: Pokemon[];
}
