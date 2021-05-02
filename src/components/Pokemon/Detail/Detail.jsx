// Import libraries
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { connect } from 'react-redux';
// Import components
import LoaderSqueare from '../../UI/Loader/Squeare/Square';
import LoaderSpinner from '../../UI/Loader/Spinner/Spinner';
import PokemonDescription from '../Description/Description';
// Import actions
import { getPokemonById } from '../../../redux/actions/pokemonActions';

const PokemonDetail = ({ 
  pokemon, 
  pokemonLoading, 
  getPokemonById,
  successRequest,
  errorRequest
}) => {
  // Get params
  const params = useParams();
  // State
  const [pokemonId] = useState(params.id);

  // Get pokemons
  useEffect(() => {
    getPokemonById(pokemonId);
  }, [getPokemonById, pokemonId]);

  return (
    <section className="container mx-auto px-4 md:px-0 grid md:grid-cols-2 grid-cols-1 gap-32">
      {errorRequest && <h5>Pokemon no found</h5>}
      <section>
        {!pokemonLoading && successRequest &&
          <img src={`https://pokeres.bastionbot.org/images/pokemon/${pokemon.id}.png`} alt={pokemon.name}/>
        }
        {pokemonLoading && 
          <div className="w-full h-80 py-60 flex justify-center items-center bg-gray-300"><LoaderSqueare /></div>
        }
      </section>
      <section className="mt-0 md:mt-10">
        {pokemonLoading && 
          <div className="w-full h-80 py-60 flex justify-center items-center"><LoaderSpinner /></div>
        }
        {!pokemonLoading && successRequest &&
          <PokemonDescription pokemon={pokemon}/>
        }
      </section>
    </section>
  )
};

// Map dispatch
const mapDispatchToProps = dispatch => ({
  getPokemonById(pokemonId) {
    dispatch(getPokemonById({ pokemonId }))
  }
});

// Map state
const mapStateToProps = state => ({
  successRequest: state.pokemonReducer.successRequest,
  errorRequest: state.pokemonReducer.errorRequest,
  pokemon: state.pokemonReducer.pokemon,
  pokemonLoading: state.pokemonReducer.pokemonLoading
});
  
export default connect(mapStateToProps, mapDispatchToProps)(PokemonDetail);