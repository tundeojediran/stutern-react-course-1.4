import './App.css';
import { UncontrolledFormUsingFormEvent, UncontrolledFormWithUseRef, ControlledForm, OptimisedControlledForm } from './components/Form';

function App() {
  return (
    <div className="App">
      <h4>Uncontrolled Form with React useRef() hook</h4>
      <UncontrolledFormWithUseRef />
      <hr />
      <h4>Uncontrolled Form with values from the Form event</h4>
      <UncontrolledFormUsingFormEvent />
      <hr />
      <h4>Controlled Form</h4>
      <ControlledForm />
      <hr />
      <h4>Optimised Controlled Form</h4>
      <OptimisedControlledForm />

    </div>
  );
}

export default App;
