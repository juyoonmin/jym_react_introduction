import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import Intro from "./jym_component/Intro";
import Hd from "./jym_component/Hd"
import Common from './jym_component/Common';

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Hd />
      <Intro />
      <Common />
    </div>
  );
}

const GlobalStyles = createGlobalStyle`
    ${reset};
`;


export default App;
