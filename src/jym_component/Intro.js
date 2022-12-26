import styled, { keyframes } from 'styled-components';
import Waves from './Waves';
function Intro() {
  return (
    // <div class="sea-wave"></div>
    <div id='Intro'>
      <div className='mainimg d-flex justify-content-center'>
        <img className='img-fluid position-relative pt-5' src="./img/main/common/img_1.png" alt="" />
        <div className='Intro_textbox position-absolute d-flex flex-column text-white text-center'>
          <h3 className='pb-4'>물속에<br /> 들어가야 <br /> 보인다</h3>
          <h2 className=''>DIVE</h2>
        </div>
      </div>
      <Waves />
    </div>
  )
}




export default Intro; 