import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';


import Waves from './jym_component/common/Waves';
import Intro from "./jym_component/Intro";
import Hd from "./jym_component/Hd"
import About from './jym_component/About';
import Work from './jym_component/Work';
import Concact from './jym_component/Concact';



import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';



function App() {
  const sendRequest = async () => {
    const response = await axios.get('http://localhost:8080');
    console.log(response);
    console.log(response.data);
  };

  useEffect(() => {
    sendRequest();
  });
  return (
    <div className="App">
      <GlobalStyles />
        <Hd />
        <Routes>
          <Route path='/' element={<Intro/>} />
          <Waves dur="5s" cls="waves waves_1" cls_2="d-none" />
          <Route path='/About' element={<About/>} />
          <Waves dur="7s" cls="waves waves_2" cls_2="d-none" />
          <Route path='/Work' element={<Work/>} />
        </Routes>
        <Waves dur="9s" cls="waves waves_3" cls_2="d-block textblend" />
        <Concact />
    </div>
  );
}

const GlobalStyles = createGlobalStyle`
    ${reset};
`;


export default App;
