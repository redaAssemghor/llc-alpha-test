import React from "react";
import { useParams } from "react-router-dom";
import { useGetPokemonByIdQuery } from "../features/pokemon/pokemonApi";
import { IoChevronBackOutline } from "react-icons/io5";

const PokemonDetail: React.FC = () => {
  const { name } = useParams<{ name: string }>();
  const { data: pokemon, isLoading, error } = useGetPokemonByIdQuery(name!);

  if (isLoading)
    return <div className="text-center text-gray-500">Loading...</div>;
  if (error)
    return (
      <div className="text-center text-red-500">Error loading Pokémon</div>
    );

  return (
    <div className="max-w-xl mx-auto p-4 bg-white rounded-lg shadow-md">
      <h1 className="text-2xl font-bold text-gray-800 capitalize mb-4">
        {pokemon?.name}
      </h1>
      <img
        className="w-48 h-48 mx-auto mb-4"
        src={pokemon?.sprites.front_default}
        alt={pokemon?.name}
      />
      <p className="text-gray-700 mb-2">Height: {pokemon?.height}</p>
      <p className="text-gray-700 mb-4">Weight: {pokemon?.weight}</p>
      <h2 className="text-xl font-semibold text-gray-800 mb-2">Abilities</h2>
      <ul className="list-disc list-inside mb-4">
        {pokemon?.abilities.map((ability) => (
          <li key={ability.ability.name}>{ability.ability.name}</li>
        ))}
      </ul>
      <h2 className="text-xl font-semibold text-gray-800 mb-2">Types</h2>
      <ul className="list-disc list-inside mb-4">
        {pokemon?.types.map((type) => (
          <li key={type.type.name}>{type.type.name}</li>
        ))}
      </ul>
      <button
        onClick={() => window.history.back()}
        className="mt-10 bg-gray-400 hover:bg-gray-500 text-white py-2 px-4 text-2xl rounded-lg transition-colors duration-200"
      >
        <IoChevronBackOutline />
      </button>
    </div>
  );
};

export default PokemonDetail;
