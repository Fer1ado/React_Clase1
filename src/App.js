import logo from './logo.svg';
import './App.css';

const probateesta = () => {
  let nombre = "saraza"
  return ("saraza")
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Saboreamela <code>src/App.js</code> para recargar la pagina. {probateesta()}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
