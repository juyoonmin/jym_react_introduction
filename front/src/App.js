import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';



import Intro from "./jym_component/Intro";
import Hd from "./jym_component/Hd"
import About from './jym_component/About';
import Work from './jym_component/Work';
import Concact from './jym_component/Concact';
import Waves from './jym_component/reusable/Waves';
import Cursor from './jym_component/reusable/Cursor';



import React, { useEffect } from 'react';



function App() {
  
  return (
    <div className="App">
      <GlobalStyles />
      <Cursor/>
      <Hd />
      <Intro />
      <Waves dur="5s" cls="waves waves_1" cls_2="d-none" />
      <About />
      <Waves dur="7s" cls="waves waves_2" cls_2="d-none" />
      <Work />
      <Waves dur="9s" cls="waves waves_3" cls_2="d-block textblend" />
      <Concact />
    </div>
  );
}

const GlobalStyles = createGlobalStyle`
    ${reset};
`;


export default App;
