import logo from "./logo.svg";
import "./App.css";
import MenuIndex from "./Components/Menu/Index";
import DrawerIndex from "./Components/Menu/DrawerIndex";

function App() {
  return (
    <div className="App">
      <div className="banner">
        <h1> Bem vindo - Testemunhe minha Evolução</h1>
        <DrawerIndex />
      </div>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
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
