import logo from './logo.svg';
import './App.css';
import Nav from './Components/Nav/Nav';
import Body from './Components/Body/Body';
import Shop from './Components/Shop/Shop';

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Body></Body>
      <Shop></Shop>
    </div>
  );
}

export default App;
