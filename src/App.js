import "./App.css";
import DrawerIndex from "./Components/Menu/DrawerIndex";

function App() {
  return (
    <div className="App">
      <div className="banner">
       
        <DrawerIndex />
        <h1> Cerimônia de Casamento </h1>
        <h2> Robert e Raissa Carvalho</h2>

      </div>
      <header className="App-header">

        <div className="DANGER">
          <img src="./IMGS/DANGER.png" alt="DANGER" />
        </div>

        <p>
          Atenção, site em construção.
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
