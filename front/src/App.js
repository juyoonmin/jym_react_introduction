import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

import Waves from './jym_component/common/Waves';
import Intro from "./jym_component/Intro";
import Hd from "./jym_component/Hd"
import About from './jym_component/About';
import Work from './jym_component/Work';
import Interview_Contact from './jym_component/Interview_Contact';


import axios from 'axios';
import React,{useState,useEffect} from 'react';



function App() {
  const sendRequest = async() => {
    const response = await axios.post('http://localhost:8080');
    console.log(response);
    console.log(response.data);
  };

  useEffect(()=>{
    sendRequest();    
  });

  
  return (
    <div className="App">
      <GlobalStyles />
      <Hd />
      <Intro />      
      <Waves dur="5s" cls="waves waves_1"/>
      <About />
      <Waves dur="8s" cls="waves waves_2"/>      
      <Work />
      <Waves dur="11s" cls="waves waves_3"/>
      <Interview_Contact />
    </div>
  );
}

const GlobalStyles = createGlobalStyle`
    ${reset};
`;


export default App;
