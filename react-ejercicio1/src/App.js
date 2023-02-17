import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="globalContainer">
      <h1>Calculator</h1>
        <div className="NumbersContainer">
          <input type="number" placeholder='A' className="numberInputs"></input>
          <h2>+</h2>
          <input type="number" placeholder='B' className="numberInputs"></input>
        </div>
        <div className="OperationsContainer">
          <button className='operationButton'>+</button>
          <button className='operationButton'>−</button>
          <button className='operationButton'>x</button>
          <button className='operationButton'>÷</button>
        </div>
        <div className="OutputContainer">
          <h2>45</h2>
        </div>
      </div>
    </div>
  );
}

export default App;
