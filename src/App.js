import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import Intro from "./jym_component/Intro";
import Hd from "./jym_component/Hd"
import About from './jym_component/About';
import Work from './jym_component/Work';

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Hd />
      <Intro />
      <About />
      <Work />
    </div>
  );
}

const GlobalStyles = createGlobalStyle`
    ${reset};
`;


export default App;
