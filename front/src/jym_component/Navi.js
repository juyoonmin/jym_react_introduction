import Scrollspy from "react-scrollspy";
import naviDBlink from '../jym_json/navi.json'

function Navi(props){
    const naviDb = naviDBlink.naviDB;
    return(
        <Scrollspy className={ 'd-md-flex mb-0 gnb_ul ' + props.cls + ' ' + props.toggle } items={[naviDb[0].naviLink,naviDb[1].naviLink,naviDb[2].naviLink] } currentClassName="is-current">
     
        {
          naviDb.map((item, index) =>{
            return(
              <li id={ 'naivID'+index } key={ 'naivID'+index } ><a href={item.naviLink} className="navi_name f400 text-decoration-none text-white">{item.naviText}</a></li>
            )
          }
          )
            
        }
      </Scrollspy>
    )
  }

  export default Navi;