import React, { useEffect } from 'react';
import AOS from "aos";
import "aos/dist/aos.css";

function Common(props) {
    useEffect(() => {
        AOS.init();
    })
    return (
        <div id="Common" className="container d-flex ps-md-5">
            <img src="./img/main/common/aaa.png" alt="" />
            <div  className='common_text'>
                <h2  data-aos="fade-up"
                    data-aos-duration="3000" data-aos-anchor={props.anchor} className="">{props.title}</h2>
            </div>
        </div>
    );
}

export default Common;