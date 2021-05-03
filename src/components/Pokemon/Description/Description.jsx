// Import styles
import './Description.css';

const PokemonDescription = ({ pokemon }) => (
  <>
    <article className="flex-col md:flex-row md:flex mb-4">
      <p className="min-p-width"><strong>Name</strong></p>
      <p>{pokemon.name}</p>
    </article>
    <article className="flex-col md:flex-row md:flex mb-4">
      <p className="min-p-width"><strong>Height</strong></p>
      <p>{`${pokemon.height} hg`}</p>
    </article>
    <article className="flex-col md:flex-row md:flex mb-4">
      <p className="min-p-width"><strong>Weight</strong></p>
      <p>{`${pokemon.weight} dm`}</p>
    </article>
    <article className="flex-col md:flex-row md:flex mb-4">
      <p className="min-p-width"><strong>Types</strong></p>
      <p>{pokemon.types.map(({ type }) => `${type.name}, `)}</p>
    </article>
    <article className="flex-col md:flex-row md:flex mb-4">
      <p className="min-p-width"><strong>Moves</strong></p>
      <p>{pokemon.moves.slice(0, 20).map(({ move }) => `${move.name}, `)}</p>
    </article>
    <section className="flex flex-wrap justify-center">
      {pokemon.stats.map(({base_stat, stat}, index) => (
        <div className="pokemon_stat" key={index}>
          <p className="pokemon_stat_name">{stat.name}</p>
          <span className="pokemon_stat_value">{base_stat}</span>
        </div>
      ))}
    </section>
  </>
);

export default PokemonDescription;