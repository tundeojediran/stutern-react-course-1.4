import logo from './logo.svg';
import './App.css';
import State from './State'

// function-based component
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRiuiIlykCVGgMsWEWjUUHbF-p9nBIlxKfBIfjahTtplQ&s"} className="App-logo" alt="logo" />
        <p>
          React is very interesting...
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <State />
      </header>
    </div>
  );
}

export default App;
