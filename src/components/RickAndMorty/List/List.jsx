// Import libraries
import { useEffect } from 'react';
import { connect } from 'react-redux';
// Import actions
import { getAllCharacters } from '../../../redux/actions/rickAndMortyActions';

const RickAndMortyList = ({ characters, getAllCharacters }) => {
  // Get characters
  useEffect(() => {
    getAllCharacters();
  }, [getAllCharacters]);

  console.log(characters);
  return (
    <section></section>
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