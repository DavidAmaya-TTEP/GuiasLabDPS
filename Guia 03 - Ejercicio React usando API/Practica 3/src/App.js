import logo from './logo.svg';
import './App.css';
import Estado from './componentes/Estado';
import EstadoES7 from './componentes/EstadoES7';
import CicloVida from './componentes/CicloVida';
import Api from './componentes/Api';




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
      </header>
      <Estado/>
      <EstadoES7/>
      <hr/>
      <CicloVida></CicloVida>
      <hr/>
      <Api></Api>
      
      
    </div>
    
  );
}

export default App;
