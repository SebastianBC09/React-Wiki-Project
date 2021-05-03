import { Link } from 'react-router-dom';
import './Card.css'

const characterCard = ({ name, img, url, id }) => {
  return (
    <section className="container characterCard">
      <section className="characterImg">
      <img src={img} alt={name}/>
      </section>
      <section className="characterName grid grid-cols-2 absolute bottom-0 left-0 right-0 bg-white h-20">
        <h5 className="text-gray-500 font-bold p-4">{name}</h5>
        <Link to={`${url}/${id}`}>
          <button className="button button_bright-green">Show </button>
        </Link>
        </section>
    </section>
  )
}

export default characterCard;