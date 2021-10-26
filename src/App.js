import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import About from './Components/About';
import Product from './Components/Product';
import Cart from './Components/Cart';
import Home from './Components/Home';

function App() {
  return (
    <div className="App">
      <Router>
      
        <Switch>
          <Route path="/about" exact>
            <About />
          </Route>
          <Route path="/products" exact>
            <Product />
          </Route>
          <Route path="/cart" exact>
            <Cart />
          </Route>
          <Route path="/" exact>
            <Home />
          </Route>
        </Switch>
      
    </Router>
    </div>
  );
}

export default App;
