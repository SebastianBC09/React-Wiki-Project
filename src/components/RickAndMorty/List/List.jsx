// Import libraries
import { useEffect } from 'react';
import { connect } from 'react-redux';
// Import actions
import { getAllCharacters } from '../../../redux/actions/rickAndMortyActions';

import Card from '../../Character/Card/Card'

const RickAndMortyList = ({ characters, getAllCharacters }) => {
  // Get characters
  useEffect(() => {
    getAllCharacters();
  }, [getAllCharacters]);

  console.log(characters);
  return (
    <section className="container mx-auto grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5">
      {characters.map(character => (
        <section key={character.id}>
          <Card name={character.name} img={character.image} url={'/detail'} id={character.id}/>
        </section>
      ))}
    </section>
  )
};

// Map dispatch
const mapDispatchToProps = dispatch => ({
  getAllCharacters() {
    dispatch(getAllCharacters())
  }
});

// Map state
const mapStateToProps = state => ({
  characters: state.rickAndMortyReducer.characters
});
  
export default connect(mapStateToProps, mapDispatchToProps)(RickAndMortyList);