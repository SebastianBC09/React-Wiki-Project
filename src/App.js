// Import libraries
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// Import views
import ChactersList from './views/CharactersList/ChactersList';
// Import components
import Header from './components/Header/Header';
// Import style
import './App.css';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main>
          <Switch>
            <Route exact path="/" component={ChactersList}/>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
