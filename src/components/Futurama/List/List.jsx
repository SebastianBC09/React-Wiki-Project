// Import libraries
import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
// Import components
import SearchInput from '../../UI/SearchInput/SearchInput';
import CharacterSimpleCard from '../../Character/SimpleCard/SimpleCard';
// Import actions
import { getAllCharacters, getCharactersByName } from '../../../redux/actions/futuramaActions';

const FuturamaList = ({ 
  characters, 
  charactersLoading, 
  getAllCharacters, 
  getCharactersByName 
}) => {
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

  // Clear search
  const clearSearch = (e) => {
    e.preventDefault();
    setCharacterName("");
    getAllCharacters();
  } 

  return (
    <>
      <section className="w-full flex justify-center">
        <SearchInput value={characterName} onChange={setCharacterName} />
        <button className="button button_bright-green ml-4" onClick={(e) => searchCharacter(e)}>Search</button>
        <button className="button button_light-blue ml-4" onClick={(e) => clearSearch(e)}>Clear Search</button>
      </section>
      <section className="container mx-auto mt-16 px-4 md:px-0 grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-10">
        {characters.map((character, index) => (
          <CharacterSimpleCard key={index} name={character.Name} imageUrl={character.PicUrl}/>
        ))}
        {charactersLoading && [1, 2, 3].map(item => <CharacterSimpleCard key={item} loading={true}/>)}
      </section>
    </>
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
  characters: state.futuramaReducer.characters,
  charactersLoading: state.futuramaReducer.charactersLoading
});
  
export default connect(mapStateToProps, mapDispatchToProps)(FuturamaList);