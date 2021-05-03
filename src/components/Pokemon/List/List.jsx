// Import libraries
import { useEffect } from 'react';
import { connect } from 'react-redux';
// Import components
import CharacterSimpleCard from '../../Character/SimpleCard/SimpleCard';
// Import actions
import { getAllPokemons } from '../../../redux/actions/pokemonActions';

const PokemonList = ({ 
  pokemons, 
  pokemonsLoading, 
  getAllPokemons
}) => {
  // Get pokemons
  useEffect(() => {
    getAllPokemons();
  }, [getAllPokemons]);

  // Get pokemon Id
  const getPokemonId = (url) => {
    const list = url.split('/');
    return list[list.length - 2];
  }

  return (
    <section className="container mx-auto mt-16 px-4 md:px-0 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
      {pokemons.map((pokemon, index) => (
        <CharacterSimpleCard 
          key={index} 
          name={pokemon.name} 
          imageUrl={`https://pokeres.bastionbot.org/images/pokemon/${getPokemonId(pokemon.url)}.png`}
        />
      ))}
      {pokemonsLoading && [1, 2, 3].map(item => <CharacterSimpleCard key={item} loading={true}/>)}
      {!pokemonsLoading && pokemons.length === 0 && <h5>No data found</h5>}
    </section>
  )
};

// Map dispatch
const mapDispatchToProps = dispatch => ({
  getAllPokemons() {
    dispatch(getAllPokemons())
  }
});

// Map state
const mapStateToProps = state => ({
  pokemons: state.pokemonReducer.pokemons,
  pokemonsLoading: state.pokemonReducer.pokemonsLoading
});
  
export default connect(mapStateToProps, mapDispatchToProps)(PokemonList);