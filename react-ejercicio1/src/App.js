import logo from './logo.svg';
import './App.css';
import Calculator from './Components/Calculator/Calculator.js';

function App() {
  return (
    <div className="App">
      <h1>Calculadora</h1>
      <h5>Introduce dos números y elige una operación. El resultado se calcula automáticamente.</h5>
      <Calculator/>
    </div>
  );
}

export default App;
