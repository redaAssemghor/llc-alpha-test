import { useGetPokemonsQuery } from "./pokemonApi";
import PokemonCard from "./PokemonCard";

const PokemonsList: React.FC = () => {
  const { data: pokemonList, isLoading, error } = useGetPokemonsQuery();

  if (isLoading) return <div>Loading...</div>;
  if (error) return <div>Error fetching Pokémon</div>;

  return (
    <div>
      {pokemonList?.results.map((pokemon) => (
        <PokemonCard key={pokemon.name} name={pokemon.name} />
      ))}
    </div>
  );
};

export default PokemonsList;
