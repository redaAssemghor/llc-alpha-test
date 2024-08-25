import { useEffect, useState } from "react";
import { RootedState } from "../../store/store";
import { useGetPokemonsQuery } from "./pokemonApi";
import PokemonCard from "./PokemonCard";
import { useSelector } from "react-redux";

const PokemonsList: React.FC = () => {
  const { data: pokemonList, isLoading, error } = useGetPokemonsQuery();
  const [showLikedPokemons, setShowLikedPokemons] = useState(false);

  const deletedPokemons = useSelector(
    (state: RootedState) => state.pokemonActions.deletedPokemons
  );

  const likedPokemons = useSelector(
    (state: RootedState) => state.pokemonActions.likedPokemons
  );

  useEffect(() => {
    console.log("deletedPokemons", deletedPokemons);
    console.log("pokemonList", pokemonList);
    console.log("liked", likedPokemons);
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching Pokémon</div>;

  const filteredPokemons = pokemonList?.results
    .filter((pokemon) => !deletedPokemons.includes(pokemon.name))
    .filter((pokemon) => {
      if (showLikedPokemons) {
        return likedPokemons.includes(pokemon.name);
      }
      return true;
    });

  return (
    <div>
      <button
        onClick={() => setShowLikedPokemons(!showLikedPokemons)}
        className="mb-4 px-4 py-2 bg-blue-500 text-white rounded"
      >
        {showLikedPokemons ? "Show All Pokémon" : "Show Liked Pokémon"}
      </button>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredPokemons?.map((pokemon) => (
          <PokemonCard key={pokemon.name} name={pokemon.name} />
        ))}
      </div>
    </div>
  );
};

export default PokemonsList;
