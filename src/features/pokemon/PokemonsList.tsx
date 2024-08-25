import { useEffect } from "react";
import { RootedState } from "../../store/store";
import { useGetPokemonsQuery } from "./pokemonApi";
import PokemonCard from "./PokemonCard";
import { useSelector } from "react-redux";

const PokemonsList: React.FC = () => {
  const { data: pokemonList, isLoading, error } = useGetPokemonsQuery();
  const deletedPokemons = useSelector(
    (state: RootedState) => state.likedPokemons.deletedPokemons
  );

  useEffect(() => {
    console.log("deletedPokemons", deletedPokemons);
    console.log("pokemonList", pokemonList);
  });

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching Pokémon</div>;

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
      {pokemonList?.results
        .filter((pokemon) => !deletedPokemons.includes(pokemon.name))
        .map((pokemon) => (
          <PokemonCard key={pokemon.name} name={pokemon.name} />
        ))}
    </div>
  );
};

export default PokemonsList;
