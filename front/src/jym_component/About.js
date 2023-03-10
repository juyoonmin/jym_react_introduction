import Common from "./reusable/Common";
import Percent from "./reusable/Percent";
import Bubbles from "./reusable/Bubbles";
import { useEffect, useRef, useState } from 'react';
import React from "react";







function About(props) {
    const containerRef = useRef();
    // const myRef = useRef();
    const [isVisible, setIsVisible] = useState(false);

    const callbackFunction = (entries) => {
        const [entry] = entries;
        setIsVisible(entry.isIntersecting);
    };

    const options = {
        root: document.getElementById('skills'),
        rootMargin: '0px',
        threshold: 1
    };



    // useEffect(() => {
    //     const siv = setInterval(() => {
    //         window.addEventListener("scroll", function () {
    //             setWsc(window.scrollY)
    //         }
    //         )
    //     }, 10000);
    //     return () => {
    //         clearInterval(siv)
    //         window.removeEventListener("scroll", function () {
    //             setWsc(window.scrollY)
    //         }
    //         );
    //     }
    // }, [])


    useEffect(() => {


        // if (isVisible) {
        //     clearInterval(siv);

        // } else {
        //     siv = setInterval(() => {
        //         window.addEventListener('scroll', function () {
        //             setWsc(window.scrollY)
        //         })
        //     }, 1000);
        // }

        const observer = new IntersectionObserver(callbackFunction, options);

        // console.log(containerRef.current.getBoundingClientRect().height, window.scrollY, isVisible)
        if (containerRef.current) observer.observe(containerRef.current);

        return () => {

            window.scrollY >= containerRef.current.getBoundingClientRect().height ? setIsVisible(true) : setIsVisible(false)

            if (containerRef.current) observer.unobserve(containerRef.current);
        };
    }, [containerRef, options]);






    return (
        <div className="section_1  position-relative" data-anchor-id="2">
            <Common title="WHO?" src="./img/main/common/common.png" anchor="[data-anchor-id='2']" cls="bubbles bubbles0" cls2="bubbles bubbles0_0" />
            <section id="About" className="maincolor">
                <Bubbles cls="bubbles bubbles1" />
                <Bubbles cls="bubbles bubbles3" />
                <div id="profile" className="container ">
                    <div className="pb-4">
                        <h3 className="common_text">Profile</h3>
                    </div>
                    <div className="profile_box bg-white rounded-4 d-flex justify-content-between align-items-center Mfc">
                        <div className="profile_box_img p-3 p-md-4 order-md-2">
                            <img className="img-fluid" src="/img/main/about/about_main_img.png" alt="메인사진" />
                        </div>
                        <div className="profile_text col-12 col-md-6 order-md-1 p-3 p-md-4">
                            <div className="profile_name">
                                <h3 className="pb-3">주윤민</h3>
                                <p className="pb-3">1994.01.09</p>
                            </div>
                            <div className="d-flex">
                                <div className="">
                                    <p className="py-3 fs-6 f700">이력 / 자격증</p>
                                    <div className="f400 license">
                                        <p>GTQ 1급</p>
                                        <p>웹 디자인 기능사</p>
                                        <p>Google Analytics</p>
                                        <p>(주)길마로 프리랜서</p>
                                        <p>(주)아이마케팅 프리랜서</p>
                                        <p>NCS 프론트엔드 과정 수료</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Bubbles cls="bubbles bubbles2" />
                <Bubbles cls="bubbles bubbles4" />
                <div id="skills" className="Skills container">
                    <div className="">
                        <h3 className="common_text">Skills</h3>
                    </div>
                    <div ref={containerRef} className="skillsdiv d-flex flex-column align-items-center">
                        <div className="skillslist_1 d-flex align-items-center">
                            {isVisible && <Percent num="0" percent="60" skillimg="./img/main/about/react.png" cls="water_box water_box_1" cls_2="skillbox skillbox_1 col-6 align-items-center d-flex flex-column" cls_3="img-fluid Mh_0" aosdelay="700" />}
                            {isVisible && <Percent num="1" percent="40" skillimg="./img/main/about/node.png" cls="water_box water_box_2" cls_2="skillbox skillbox_2 col-6 align-items-center d-flex flex-column" cls_3="img-fluid Mh_0" aosdelay="900" />}
                        </div>
                        <div className="skillslist_2 d-flex Mfc align-items-center" data-anchor-id="1">
                            <div className="order-md-2 ">
                                {isVisible && <Percent num="3" percent="85" skillimg="./img/main/about/html_css.png" cls="water_box water_box_4" cls_2="skillbox skillbox_4  align-items-center d-flex flex-column " cls_3="img-fluid " aosdelay="500" />}
                            </div>
                            <div className="d-none d-md-flex order-md-1 ">
                                {isVisible && <Percent num="2" percent="80" skillimg="./img/main/about/jquery.png" cls="water_box water_box_3" cls_2="skillbox skillbox_3  align-items-center d-flex flex-column " cls_3="img-fluid Mh_0" aosdelay="1500" />}
                            </div>
                            <div className="d-none d-md-flex order-md-3 ">
                                {isVisible && <Percent num="4" percent="70" skillimg="./img/main/about/sass.png" cls="water_box water_box_5" cls_2="skillbox skillbox_5  align-items-center d-flex flex-column " cls_3="img-fluid Mh_0" aosdelay="1100" />}
                            </div>
                            <div className="d-md-none d-flex">
                                {isVisible && <Percent num="7" percent="80" skillimg="./img/main/about/jquery.png" cls="water_box water_box_3" cls_2="skillbox skillbox_3  align-items-center d-flex flex-column " cls_3="img-fluid Mh_0" aosdelay="600" />}
                                {isVisible && <Percent num="8" percent="70" skillimg="./img/main/about/sass.png" cls="water_box water_box_5" cls_2="skillbox skillbox_5  align-items-center d-flex flex-column " cls_3="img-fluid Mh_0" aosdelay="700" />}
                            </div>
                        </div>
                        <div className="skillslist_3 d-flex align-items-center">
                            {isVisible && <Percent num="5" percent="50" skillimg="./img/main/about/js.png" cls="water_box water_box_6" cls_2="skillbox skillbox_6 col-6 align-items-center d-flex flex-column" cls_3="img-fluid Mh_0" aosdelay="1300" />}
                            {isVisible && <Percent num="6" percent="40" skillimg="./img/main/about/figma_s.png" cls="water_box water_box_7" cls_2="skillbox skillbox_7 col-6 align-items-center d-flex flex-column" cls_3="img-fluid Mh_0" aosdelay="1200" />}
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
}








export default About;