// Import libraries
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// Import views
import ViewRickAndMortyList from './views/RickAndMorty/List/List';
import ViewRickAndMortyDetail from './views/RickAndMorty/Detail/Detail'
import ViewFuturamaList from './views/Futurama/List/List';
import ViewPokemonList from './views/Pokemon/List/List';
import ViewPokemonDetail from './views/Pokemon/Detail/Detail';
// Import components
import Header from './components/UI/Header/Header';
// Import style
import './App.css';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main className="mb-20">
          <Switch>
            <Route exact path="/" component={ViewRickAndMortyList}/>
            <Route exact path="/detail/:id" component={ViewRickAndMortyDetail}/>
            <Route exact path="/futurama" component={ViewFuturamaList}/>
            <Route exact path="/pokemon" component={ViewPokemonList}/>
            <Route exact path="/pokemon/:id" component={ViewPokemonDetail}/>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
