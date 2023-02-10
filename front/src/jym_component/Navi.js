import { useState } from "react";
import Scrollspy from "react-scrollspy";
import naviDBlink from '../jym_json/navi.json'

function Navi(props) {
  const [activenum, naviUpdate] = useState(-1);
  //하나의 번호만 가지게 되는 랜더링변수

  const naviActive = (e) => {
    const navinodes = [...e.target.parentElement.parentElement.children];
    //li들을 담아라
    //index 번호 색출하기위함
    console.log(navinodes.length);
    //li총개수

    const index = navinodes.indexOf(e.target.parentElement);// 타겟 li
    console.log(index); // 그 li의 번호

    naviUpdate(index);
  }

//   useEffect(()=>{
//       let section = document.querySelectorAll('section');
//   let lists = document.querySelectorAll('.list');
//   function activeLink(li) {
//       lists.forEach((item) => item.classList.remove('active'));
//       li.classList.add('active');
//   }
//   lists.forEach((item) =>
//       item.addEventListener('click', function(){
//           activeLink(this);
//       }));
  
//   window.addEventListener('scroll',()=>{
//  section.forEach(sec => {
//         let top = window.scrollY;
//         let offset = sec.offsetTop;
//         let height = sec.offsetHeight;
//         let id = sec.getAttribute('id');

//         if (top >= offset && top < offset + height) {
//             const target = document.querySelector(`[href='#${id}']`).parentElement;
//             activeLink(target);
//         }else{
//           function activeLink(li) {
//             lists.forEach((item) => item.classList.remove('active'));
//             li.classList.add('active');
//         }
//         }
//     })
//   }
  
   
  // )
  

  // },[])


  // const [scrollPosition, setScrollPosition] = useState(0);
  // const updateScroll = () => {
  //   setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  // }
  // useEffect(() => {
  //   window.addEventListener('scroll', updateScroll);
  // });

  const naviDb = naviDBlink.naviDB;


  return (
    <Scrollspy className={'d-md-flex mb-0 gnb_ul ' + props.cls + props.toggle}
      items={[naviDb[0].naviLink, naviDb[1].naviLink, naviDb[2].naviLink]} currentClassName="is-current" highlightAllItemsInView={true}>
      {
        naviDb.map((item, index) => {
          return (
            <li className="list" id={'naivID' + index} key={'naivID' + index} ><a onClick={naviActive} href={item.naviLink} className={item.cls}>{item.naviText}</a></li>
          )
        }
        )

      }
    </Scrollspy>
  )
}

export default Navi;