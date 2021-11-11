import Navbar from './Navbar.js';


function App() {
  const title = "Our vision"
  
  return (
    <div className="App">
      <Navbar/ >
      
      <div className="content">
        
        <h2>{title}</h2>
        Memory Glass is a startup focused on helping Alzheimers patients reconnect with those they can't remember. Our team is focused on combining technology with people with cognitive memory loss as an alternative to their current prescriptions. The  product combines smart glass technology with facial recognition in order to help identify loved ones of the patients.  
        
      </div>
    </div>
  );
}

export default App;
