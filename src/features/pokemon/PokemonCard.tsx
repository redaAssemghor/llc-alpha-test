import { Link } from "react-router-dom";
import { useGetPokemonByIdQuery } from "./pokemonApi";
import React from "react";

const PokemonCard: React.FC<{ name: string }> = ({ name }) => {
  const { data: pokemon, isLoading, error } = useGetPokemonByIdQuery(name);

  if (isLoading)
    return <div className="text-center text-gray-500">Loading {name}...</div>;
  if (error)
    return <div className="text-center text-red-500">Error loading {name}</div>;

  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-lg transition-shadow duration-300">
      <Link to={`/pokemon/${pokemon?.id}`}>
        <h3 className="text-lg font-semibold text-gray-800 capitalize">
          {pokemon?.name}
        </h3>
        <img
          className="w-32 h-32 mx-auto my-4"
          src={pokemon?.sprites.front_default}
          alt={pokemon?.name}
        />
        <button className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors duration-200">
          Like
        </button>
      </Link>
    </div>
  );
};

export default PokemonCard;
