
import './App.css';
import Navbar from './Navbar.js';
import Home from './Home.js';

function App() {
  const title = 'Memory Glass'
  
  return (
    <div className="App">
      <Navbar/ >
      <Home />
      <div className="content">
        <h1>{title}</h1>
        
      </div>
    </div>
  );
}

export default App;
