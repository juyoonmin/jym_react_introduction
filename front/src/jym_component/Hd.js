import { useEffect, useRef, useState } from 'react';
import Navi from './Navi';


// 리액트의 생명주기 
// React의 특성상 변화가 있을 때 DOM을 다시 탐색하고 변화가 있는 부분을 Render하여  
// 다시 그려주기(이 부분이 브라우저의 동작원리 중 리플로우, 리페인팅에 해당합니다.) 
// 때문인데 위와 같은 방식으로 구현을 하게 되면 성능에도 문제가 발생합니다. 

// 위와 같은 현상과 성능 개선을 위해 스크롤 이벤트에 Timer를 두어서 Timer안에서 
// 이벤트가 발생하고 이벤트가 발생된 후 
// 해당 타이머는 초기화를 시켜주어 이벤트의 중복을 통한 성능 지연을 방지합니다. 



function Header(props) {
  const targetRef = useRef(null);
  const [isMobile, setisMobile] = useState(false);
  const [naviOpen, setnaviOpen] = useState(false);


  const resizeHandler = () => {
    if (window.innerWidth <= 767) {
      setisMobile(true); //isMobile 값은 true Navi컴포넌트 랜더링할께
    } else {
      setisMobile(false); //isMobile 값은 false Navi컴포넌트 랜더링할께
    }
    setnaviOpen(false); // 메뉴 오픈상태에서 스크롤일때 감추기
  }


  const handleScroll = () => {
    if (window.scrollY > 100) {
      targetRef.current.classList.add('scroll');
    } else {
      targetRef.current.classList.remove('scroll')
    }
    setnaviOpen(false);
  };


  useEffect(() => {
    resizeHandler(); // 모바일인지 아닌지 
    const timer = setInterval(() => {
      window.addEventListener("scroll", handleScroll);
      window.addEventListener('resize', resizeHandler)
    }, 100);
    return () => {
      clearInterval(timer);
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener('resize', resizeHandler)
    };
  }, []);



  return (
    <header ref={targetRef} id="hd"
      className="App-header d-flex
                  align-items-center px-lg-5 py-3
                  fixed-top maincolor">
      <div className='d-flex align-items-center'>
        <h1 className="mb-0">
          <a href="#top" className="d-block ps-3">
            <img src="img/seo/logo.png" className="img-fluid w-100" alt="logo" />
          </a>
        </h1>
        <button className='navi_btn d-md-none ' id="allMenu" onClick={e => {
          setnaviOpen(!naviOpen)
        }} ></button>
      </div>

      <div className='navi d-flex align-items-center justify-content-center'>
        <Navi cls={isMobile ? 'mobileNavi ' : ''} toggle={naviOpen ? 'on' : ''} />
      </div>
    </header>
  )
}
export default Header;