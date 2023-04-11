import './App.css';
import Button from './components/Button';
import ButtonWithProps from './components/ButtonWithProps';
import ProfileWithCSSModule from './components/ProfileWithCSSModule';
import ProfileWithExternalStyle from './components/ProfileWithExternalStyle';
import ProfileWithInlineStyle from './components/ProfileWithInlineStyle';

function App() {


  return (
    <>
      <ProfileWithInlineStyle />
      <ProfileWithExternalStyle />
      <ProfileWithCSSModule />

      <Button>I am not inverted</Button>
      <Button inverted={true}>I am inverted</Button>

      <ButtonWithProps>I am inverted</ButtonWithProps>
      <ButtonWithProps inverted={true}>I am not inverted</ButtonWithProps>
    </>
  );
}

export default App;
