// Import libraries
import { useEffect } from 'react';
import { connect } from 'react-redux';
// Import components
import CharacterCard from '../../Character/Card/Card';
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
        <CharacterCard 
          key={index} 
          name={pokemon.name} 
          imageUrl={`https://pokeres.bastionbot.org/images/pokemon/${getPokemonId(pokemon.url)}.png`}
          url={'/pokemon'}
          id={getPokemonId(pokemon.url)}
        />
      ))}
      {pokemonsLoading && [1, 2, 3].map(item => <CharacterCard key={item} loading={true}/>)}
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