import { Link } from "react-router-dom";
import { useGetPokemonByIdQuery } from "./pokemonApi";
import { useDispatch, useSelector } from "react-redux";
import { toggleLike, deletePokemon } from "../actions/pokemonActionsSlice";
import { RootedState } from "../../store/store";
import { FaHeart, FaRegTrashAlt } from "react-icons/fa";

const PokemonCard: React.FC<{ name: string }> = ({ name }) => {
  const { data: pokemon, isLoading, error } = useGetPokemonByIdQuery(name);
  const dispatch = useDispatch();

  const isLiked = useSelector((state: RootedState) =>
    state.pokemonActions.likedPokemons.includes(pokemon?.name || "")
  );

  if (isLoading) return <div>Loading {name}...</div>;
  if (error) return <div>Error loading {name}</div>;

  const handleLike = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (pokemon?.name) {
      dispatch(toggleLike(pokemon.name));
    }
  };

  const handleDelete = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (pokemon?.name) {
      dispatch(deletePokemon(pokemon.name));
    }
  };

  return (
    <div className="card bg-white shadow-md rounded-md p-4 hover:shadow-lg transition-shadow duration-300">
      <Link to={`/pokemon/${pokemon?.id}`} className="block text-center">
        <h3 className="text-xl font-bold capitalize">{pokemon?.name}</h3>
        <img
          src={pokemon?.sprites.front_default}
          alt={pokemon?.name}
          className="mx-auto"
        />
      </Link>
      <div className="flex justify-between mt-4">
        <button
          onClick={handleLike}
          className={`text-2xl ${
            isLiked ? "text-red-500" : "text-gray-500"
          } transition-colors duration-200`}
        >
          <FaHeart />
        </button>
        <button
          onClick={handleDelete}
          className="text-2xl text-gray-700 hover:text-red-600 transition-colors duration-200"
        >
          <FaRegTrashAlt />
        </button>
      </div>
    </div>
  );
};

export default PokemonCard;
