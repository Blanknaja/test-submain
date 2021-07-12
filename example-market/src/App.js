import logo from './logo.svg';
import './App.css';
import { Hello } from "home-component-modules";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>MArket</h1>
        <Hello text = "Hello"/>
      </header>
    </div>
  );
}

export default App;
