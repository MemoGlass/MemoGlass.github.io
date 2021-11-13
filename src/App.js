import Navbar from './Navbar.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home.js';
import Login from './Login.js';
import AboutUs from './AboutUs.js';


function App() {
  

  return (
    <Router>
      <div className="App">
        
        
        <div className="content">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/aboutus">
              <AboutUs />
            </Route>

          </Switch>
          

        </div>
      </div>
    </Router>
  );
}

export default App;
