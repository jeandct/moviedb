import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import './App.css';
import Home from './components/Home/Home';
import Film from './components/Film/Film';

function App() {
  return (
    <div className='App'>
      <Router>
        <NavBar />
        <main>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/film/:id' component={Film}></Route>
            <Route path='/series'></Route>
            <Route path='/profil'></Route>
          </Switch>
        </main>
      </Router>
    </div>
  );
}

export default App;
