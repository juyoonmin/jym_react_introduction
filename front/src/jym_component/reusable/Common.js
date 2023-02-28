import React, { useEffect } from 'react';
import Bubbles from './Bubbles';
import AOS from "aos";
import "aos/dist/aos.css";

function Common(props) {


    useEffect(() => {
        AOS.init();
    })
    return (
        <section id="Common" className="container d-flex ps-md-5">
            <img src="./img/main/common/aaa.png" alt="" />
            <div className='center-outer'>
                <div className='center-inner'>
                    <div className='common_text'>
                        <h2 data-aos="fade-up"
                            data-aos-duration="3000" data-aos-anchor={props.anchor} className="">{props.title}</h2>
                        <Bubbles cls={props.cls} dnone="d-none" />
                        <Bubbles cls2={props.cls2} dnone="d-none"/>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Common;