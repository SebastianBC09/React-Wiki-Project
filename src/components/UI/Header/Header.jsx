// Import libraries
import { useState } from 'react';
import { useHistory, useLocation } from 'react-router-dom';
// Import styles
import './Header.css';

const Header = () => {
  // Router
  let history = useHistory();
  let location = useLocation();
  // State
  const [path, setPath] = useState(location.pathname);

  // Change url path
  const changePath = (url) => {
    setPath(url);
    history.push(url);
  }
  
  return (
    <header className="lg:px-0 px-4">
      <section className="container mx-auto flex items-center justify-between h-full">
        <h3>React Wiki</h3>
        <select className="api_select" value={path} onChange={({ target }) => changePath(target.value)}>
          <option value="/">Rick & Morty API</option>
          <option value="/futurama">Futurama API</option>
          <option value="/pokemon">Pokemon API</option>
        </select>
      </section>
    </header>
  )
};

export default Header;