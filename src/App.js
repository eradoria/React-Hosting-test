
import { Button } from './components/Button';
import './App.css';

function App() { 
  function handleSubmit(){
        console.log("I am submitted")
      }
  return (
    <div className="App">
     
      Hello World 
      <br></br>
      <br></br>
      <Button label="Submit" handleClick={handleSubmit} />
      <Button label="Import" />
      <Button label="Clear" />
    </div>
  );
}

export default App;
