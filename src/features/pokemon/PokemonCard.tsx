import { useGetPokemonByIdQuery } from "./pokemonApi";

const PokemonCard: React.FC<{ name: string }> = ({ name }) => {
  const { data: pokemon, isLoading, error } = useGetPokemonByIdQuery(name);

  if (isLoading) return <div>Loading {name}...</div>;
  if (error) return <div>Error loading {name}</div>;

  return (
    <div className="card">
      <h3>{pokemon?.name}</h3>
      <img src={pokemon?.sprites.front_default} alt={pokemon?.name} />
      <button>Like</button>
    </div>
  );
};

export default PokemonCard;
