import logo from './logo.svg';
import './App.css';
import Counter from './Counter';
import ToDo from './ToDo';

function App() {

  return (
    <div className="App">
      <Counter initialCount={0}/>
      <ToDo />
    </div>
  );
}

export default App;
