import { useEffect, useState } from "react";
import { useGetPokemonsQuery } from "./pokemonApi";
import PokemonCard from "./PokemonCard";
import { useSelector } from "react-redux";
import { Pokemon } from "./types";
import { RootedState } from "../../store/store";

const PokemonsList: React.FC = () => {
  const { data: pokemonList, isLoading, error } = useGetPokemonsQuery();
  const [showLikedPokemons, setShowLikedPokemons] = useState(false);
  const [pokemonsArr, setPokemonsArr] = useState<Pokemon[]>([]);

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
  }, [deletedPokemons, pokemonList, likedPokemons]);

  const handleFetch = () => {
    if (pokemonList?.results) {
      setPokemonsArr(pokemonList.results);
    }
    console.log("pokemonsArr", pokemonsArr);
  };

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching Pokémon</div>;

  const filteredPokemons = pokemonsArr
    .filter((pokemon) => !deletedPokemons.includes(pokemon.name))
    .filter((pokemon) => {
      if (showLikedPokemons) {
        return likedPokemons.includes(pokemon.name);
      }
      return true;
    });

  return (
    <div className="m-4">
      <div className="flex gap-1 justify-around">
        <button
          onClick={handleFetch}
          className="mb-4 w-60 px-4 py-2 bg-gray-600 text-white rounded"
        >
          Fetch Pokémons
        </button>
        <button
          onClick={() => setShowLikedPokemons(!showLikedPokemons)}
          className="mb-4 w-60 px-4 py-2 bg-gray-600 text-white rounded"
        >
          {showLikedPokemons ? "Show All Pokémons" : "Show Liked Pokémons"}
        </button>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {filteredPokemons.map((pokemon) => (
          <PokemonCard key={pokemon.name} name={pokemon.name} />
        ))}
      </div>
    </div>
  );
};

export default PokemonsList;
