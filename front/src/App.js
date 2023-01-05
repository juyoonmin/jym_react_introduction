import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
import Intro from "./jym_component/Intro";
import Hd from "./jym_component/Hd"
import About from './jym_component/About';
import Work from './jym_component/Work';
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
      <About />      
      <Work />
    </div>
  );
}

const GlobalStyles = createGlobalStyle`
    ${reset};
`;


export default App;
