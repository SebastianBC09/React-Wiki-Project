// Import libraries
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
// Import actions
import { getAllCharacters, getCharactersByName } from '../../../redux/actions/futuramaActions';

const FuturamaList = ({ characters, getAllCharacters, getCharactersByName }) => {
  // State
  const [characterName, setCharacterName] = useState("");

  // Get characters
  useEffect(() => {
    getAllCharacters();
  }, [getAllCharacters]);

  // Search character by name
  const searchCharacter = (e) => {
    e.preventDefault();
    const formatCharacterName = characterName.split(' ').join('-').toLowerCase();
    getCharactersByName(formatCharacterName);
  }

  console.log(characters);
  return (
    <section>
      <input value={characterName} onChange={({ target }) => setCharacterName(target.value)}/>
      <button onClick={(e) => searchCharacter(e)}>Search</button>
    </section>
  )
};

// Map dispatch
const mapDispatchToProps = dispatch => ({
  getAllCharacters() {
    dispatch(getAllCharacters())
  },
  getCharactersByName(characterName) {
    dispatch(getCharactersByName({ characterName }))
  }
});

// Map state
const mapStateToProps = state => ({
  characters: state.futuramaReducer.characters
});
  
export default connect(mapStateToProps, mapDispatchToProps)(FuturamaList);