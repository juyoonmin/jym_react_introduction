import SVG from 'react-inlinesvg';

function Intro() {
  return (
    <section id='Intro' className='maincolor'>
      <div className='mainimg d-flex justify-content-center'>
        <img className='img-fluid position-relative pt-5' src="./img/main/common/img_1.png" alt="메인이미지" />
        <div className='Intro_textbox position-absolute d-flex flex-column text-white text-center'>
          <p className='pb-4'>물속에<br /> 들어가야 <br /> 보인다</p>
          <a href="#About"><SVG src={dive} /></a>
        </div>
      </div>
    </section>
  )
}

const dive =`<svg className="DIVE" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
width="574.558px" height="190px" viewBox="0 0 574.558 120" enable-background="new 0 0 574.558 120" xml:space="preserve">
<defs>
 <pattern id="water" width=".25" height="1.1" patternContentUnits="objectBoundingBox">
   <path fill="#fff" d="M0.25,1H0c0,0,0-0.659,0-0.916c0.083-0.303,0.158,0.334,0.25,0C0.25,0.327,0.25,1,0.25,1z"/>
 </pattern>
 
 <text id="text" transform="matrix(1 0 0 1 -8.0684 116.7852)" font-size="261.047">DIVE</text>
 
 <mask id="text_mask">
   <use x="0" y="0" xlink:href="#text" opacity="1" fill="#ffffff"/>
 </mask>
</defs>

<use x="0" y="0" xlink:href="#text" fill="#293380"/>

<rect className="water-fill" mask="url(#text_mask)" fill="url(#water)" x="-400" y="0" width="1600" height="120"/>
</svg>
`






export default Intro; 