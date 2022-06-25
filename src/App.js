import logo from "./logo.svg";
import "./App.css";
import mauri from "./Captura de pantalla 2022-06-24 161022.png";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Tengan miedo its comming!</p>
        <img src={mauri} alt="mauri" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Mauri project it's about to start
        </a>
        <p>warning!</p>
      </header>
    </div>
  );
}

export default App;
