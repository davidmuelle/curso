import logo from './logo.svg';
import './App.css';
import Ejemplo from './hooks/ejemplo';
import Ejemplo2 from './hooks/ejemplo2';
import MiComponenteConContexto from './hooks/ejemplo3';
import Ejemplo4 from './hooks/ejemplo4';
function App() {
  return (
    <div className="App">
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
       <MiComponenteConContexto />
          <Ejemplo4 nombre="martin">
          {/* todo lo que hay dentro de aqui es tratado com props.children */}
          <h3>contenido del props.children</h3>
          
           </Ejemplo4>
      </header>
    </div>
  );
}

export default App;
