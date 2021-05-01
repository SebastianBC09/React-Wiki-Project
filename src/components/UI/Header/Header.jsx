// Import styles
import './Header.css';

const Header = () => (
  <header>
    <section className="container mx-auto flex items-center justify-between h-full">
      <h3>React Wiki</h3>
      <select className="api_select">
        <option value="Rick_Morty">Rick & Morty API</option>
        <option value="Futurama">Futurama API</option>
        <option value="Pokemon">Pokemon API</option>
      </select>
    </section>
  </header>
);

export default Header;