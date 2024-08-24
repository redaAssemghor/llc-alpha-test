import React from "react";
import { useParams } from "react-router-dom";
import { useGetPokemonByIdQuery } from "../features/pokemon/pokemonApi";

const PokemonDetail: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const { data: pokemon, isLoading, error } = useGetPokemonByIdQuery(name!);

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error loading Pokémon</div>;

  return (
    <div>
      <h1>{pokemon?.name}</h1>
      <img src={pokemon?.sprites.front_default} alt={pokemon?.name} />
      <p>Height: {pokemon?.height}</p>
      <p>Weight: {pokemon?.weight}</p>
      <h2>Abilities</h2>
      <ul>
        {pokemon?.abilities.map((ability) => (
          <li key={ability.ability.name}>{ability.ability.name}</li>
        ))}
      </ul>
      <h2>Types</h2>
      <ul>
        {pokemon?.types.map((type) => (
          <li key={type.type.name}>{type.type.name}</li>
        ))}
      </ul>
      <button onClick={() => window.history.back()}>Go Back</button>
    </div>
  );
};

export default PokemonDetail;
