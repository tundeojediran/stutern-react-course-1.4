import './App.css';
// import {Button} from '@mui/material'
import Button from '@mui/material/Button'

//Theming

function App() {
  return (
    <div className="App">
      <Button variant="contained" color="success" fullWidth={true} size='small'>Hello World</Button>
      <Button variant="contained" color="error" fullWidth={false} size='medium'>Click Me</Button>
      <Button variant="contained" color="warning" fullWidth={true} size='large'>I am a Rockstar Enginer</Button>
      <Button variant="contained" color="info" fullWidth={false} size='small'>Hello World</Button>
    </div>
  );
}

export default App;
