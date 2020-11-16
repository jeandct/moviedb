import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import './App.css';
import Home from './components/Home/Home';
import Film from './components/Film/Film';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className='App'>
      <Router>
        <header>
          <NavBar />
        </header>
        <main>
          <Switch>
            <Route exact path='/'>
              <Home />
            </Route>
            <Route path='/:media/:id' component={Film}></Route>
            <Route path='/series'></Route>
            <Route path='/profil'></Route>
          </Switch>
        </main>
      </Router>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
