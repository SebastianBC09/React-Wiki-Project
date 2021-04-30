// Import libraries
import { useEffect } from 'react';
import { connect } from 'react-redux';
// Import actions
import { getAllCharacters } from '../../../redux/actions/charactersActions';

const RickAndMortyList = ({ characters, getAllCharacters }) => {
  // Get characters
  useEffect(() => {
    getAllCharacters();
  }, [getAllCharacters]);

  console.log(characters);
  return (
    <section>
      <h1 className="text-center mt-3">Chacters list</h1>
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
  characters: state.charactersReducer.characters
});
  
export default connect(mapStateToProps, mapDispatchToProps)(RickAndMortyList);