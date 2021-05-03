// Import libraries
import { Link } from 'react-router-dom';
// Import component
import LoaderSquare from '../../UI/Loader/Squeare/Square';
// Import styles
import './Card.css';

const characterCard = ({ name, imageUrl, url, id, loading }) => (
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
        <section className="absolute bottom-0 left-0 right-0 bg-white h-20 flex items-center px-4 flex justify-between">
          <h5>{name}</h5>
          <Link to={`${url}/${id}`}>
            <button className="button button_bright-green">Show </button>
          </Link>
        </section>
      </>  
    }
  </article>
)

export default characterCard;