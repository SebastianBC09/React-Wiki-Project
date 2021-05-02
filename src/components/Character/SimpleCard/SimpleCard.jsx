// Import component
import LoaderSquare from '../../UI/Loader/Squeare/Square';
// Import styles
import './SimpleCard.css';

const CharacterSimpleCard = ({ name, imageUrl, loading }) => (
  <article className="character-simple-card">
    {loading ?
      <>
        <section className="w-full h-full bg-gray-300 flex justify-center items-center">
          <LoaderSquare />
        </section>
        <section className="absolute bottom-0 left-0 right-0 bg-white h-20"></section>
      </>
      :
      <>
        <img className="character-simple-card-img" src={imageUrl} alt={name}/>
        <section className="absolute bottom-0 left-0 right-0 bg-white h-20 flex items-center pl-4">
          <h5>{name}</h5>
        </section>
      </>  
    }
  </article>
)

export default CharacterSimpleCard;