import logo from './logo.svg';
import './App.css';
// import {TestComponent } from 'react-component-library';
import { Hello , ProjectCardVertical } from 'home-component-modules';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        {/* <TestComponent/> */}
        <Hello text="Hello"/>
        <ProjectCardVertical/>
      </header>
    </div>
  );
}

export default App;
