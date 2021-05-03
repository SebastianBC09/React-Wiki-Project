// Import libraries
import { useEffect } from 'react';
import { connect } from 'react-redux';
import { useParams } from 'react-router-dom';
// Import actions
import { getCharacterById } from '../../../redux/actions/rickAndMortyActions';

const RickAndMortyDetail = ({character, getCharacterById, characterLoading, successRequest}) => {
  const params = useParams();

  useEffect(() => {
    getCharacterById(params.id);
  }, [getCharacterById, params])
  /* Reto: Pasar el ID a la function. */

  console.log(character)
  return (
    <section>
      <section className="grid grid-cols-2">
        <section className="characterImg">
          <img src={character.image} alt=""/>
        </section> 
        <section className="characterInfo">
          <p>{character.name}</p>
          <p>{character.gender}</p>
          <p>{character.species}</p>
          <p>{character.status}</p>
          {successRequest && <p>{character.location.name}</p>}
        </section>
      </section>
    </section>
  )
}

// Map dispatch
const mapDispatchToProps = dispatch => ({
  getCharacterById(characterID) {
    dispatch(getCharacterById({characterID}))
  }
});

// Map state
const mapStateToProps = state => ({
  character: state.rickAndMortyReducer.character,
  characterLoading: state.rickAndMortyReducer.characterLoading,
  successRequest: state.rickAndMortyReducer.successRequest
});
  
export default connect(mapStateToProps, mapDispatchToProps)(RickAndMortyDetail);



