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
    <section className="container mx-auto grid grid-cols-3 gap-5">
      <section className="bg-green-300">Morty</section>
      <section className="bg-blue-300">MrPoppybutthole</section>
      <section className="bg-indigo-300">BirdMan</section>
      <section className="bg-purple-300">BirdMan</section>
      <section className="bg-pink-300">BirdMan</section>
      <section className="bg-yellow-300">BirdMan</section>
      <section className="bg-red-300">BirdMan</section>
      <section className="bg-gray-300">BirdMan</section>
      <section className="bg-green-400">BirdMan</section>
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