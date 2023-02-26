import logo from './logo.svg';
import './App.css';
import ToDo from './ToDo';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ToDo />
      </header>
    </div>
  );
}

export default App;
