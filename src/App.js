// Import libraries
import { BrowserRouter, Switch, Route } from 'react-router-dom';
// Import views
import ViewRickAndMortyList from './views/RickAndMorty/List/List';
import ViewRickAndMortyDetail from './views/RickAndMorty/Detail/Detail'
import ViewFuturamaList from './views/Futurama/List/List';
// Import components
import Header from './components/UI/Header/Header';
// Import style
import './App.css';

const App = () => {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <main>
          <Switch>
            <Route exact path="/" component={ViewRickAndMortyList}/>
            <Route exact path="/detail/:id" component={ViewRickAndMortyDetail}/>
            <Route exact path="/futurama" component={ViewFuturamaList}/>
          </Switch>
        </main>
      </BrowserRouter>
    </div>
  );
}

export default App;
