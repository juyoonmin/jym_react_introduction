function Waves(props) {
  return (
    
      <div className={props.cls}>
        <svg width="100%" height="200px" fill="none" version="1.1"
          xmlns="http://www.w3.org/2000/svg">
          <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stop-color="#00B4DB" />
            <stop offset="50%" stop-color="#224488" />
            <stop offset="100%" stop-color="#0083B0" />
          </linearGradient>
          <path
            fill="white"
            d="
                M0 67
                C 273,183
                  822,-40
                  3000.00,106 
                
                V 359 
                H 0 
                V 67
                Z">
            <animate
              repeatCount="indefinite"
              fill="white"
              attributeName="d"
              dur={props.dur}
              attributeType="XML"
              values="
                  M0 77 
                  C 473,283
                    822,-40
                    3000,116 
                  
                  V 359 
                  H 0 
                  V 67 
                  Z; 
      
                  M0 77 
                  C 473,-40
                    1222,283
                    3000,136 
                  
                  V 359 
                  H 0 
                  V 67 
                  Z; 
      
                  M0 77 
                  C 973,260
                    1722,-53
                    3000,120 
                  
                  V 359 
                  H 0 
                  V 67 
                  Z; 
      
                  M0 77 
                  C 473,283
                    822,-40
                    3000,116 
                  
                  V 359 
                  H 0 
                  V 67 
                  Z
                  ">
            </animate>
          </path>
        </svg>
        <div className={props.cls_2}>
            <h2 className="ps-md-5">INTERVIEW</h2>
        </div>
      </div>
      
     
    

  );
}

export default Waves;