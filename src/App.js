import Navbar from './Navbar.js';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './Home.js';
import Login from './Login.js';
import AboutUs from './AboutUs.js';
import Settings from './Settings.js'
import contacts from './contacts.js';
import sync from './sync.js';



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
            <Route exact path="/contacts">
              <contacts />
            </Route>
            <Route exact path="/settings">
              <Settings />
            </Route>
            <Route exact path="/sync">
              <sync />
            </Route>

          </Switch>


        </div>
      </div>
    </Router>
  );
}

export default App;
