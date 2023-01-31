import Common from "./common/Common";
import Percent from "./common/Percent";
import { useEffect, useRef, useState } from 'react';






function About(props) {
    const TargetRef = useRef(null);
    const [navieffect, setnavieffect] = useState(false);


    const HandleScroll = () => {
        if (window.scrollY > TargetRef) {
            document.querySelector('#hd .gnb_ul li').classList.add('navi_name');
        } else {
            document.querySelector('#hd .gnb_ul li').classList.remove('navi_name')
        }
        setnavieffect(false);
    };


    useEffect(() => {
        const Timer = setInterval(() => {
            window.addEventListener("scroll", HandleScroll);
        }, 100);
        return () => {
            clearInterval(Timer);
            window.removeEventListener("scroll", HandleScroll);
        };
    }, []);

    

    return (

        <div className="section_1  position-relative">
            <Common title="WHO?" />
            <section ref={TargetRef} id="About" className="maincolor">
                <div id="profile" className="container ">
                    <div className="pb-5">
                        <h3 className="common_text">Profile</h3>
                    </div>
                    <div className="profile_box bg-white rounded-4 d-flex justify-content-between align-items-center Mfc">
                        <div className="profile_box_img p-3 p-md-4 order-md-2">
                            <img className="img-fluid" src="/img/main/about/about_main_img.png" alt="" />
                        </div>
                        <div className="col-12 col-md-6 order-md-1 p-3 p-md-4">
                            <div className="profile_name">
                                <h3 className="pb-3">주윤민</h3>
                                <p className="pb-3">1994.01.09</p>
                            </div>
                            <div className="d-flex">
                                <div className="">
                                    <p className="py-3 fs-6 f700">이력 / 자격증</p>
                                    <p className="f400">저쩌고<br />어쩌고<br />미주알</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div id="skills" className="Skills container">
                    <div className="">
                        <h3 className="common_text">Skills</h3>
                    </div>
                    <div className="d-flex flex-column align-items-center">
                        <div className="skillslist_1 d-flex align-items-center">
                            <Percent num="0" percent="50" skillimg="" cls="water_box water_box_1" cls_2="skillbox skillbox_1 col-6 align-items-center d-flex flex-column" cls_3="img-fluid Mh_0" aosdelay="700" />
                            <Percent num="1" percent="50" skillimg="" cls="water_box water_box_2" cls_2="skillbox skillbox_2 col-6 align-items-center d-flex flex-column" cls_3="img-fluid Mh_0" aosdelay="900" />
                        </div>
                        <div className="skillslist_2 d-flex Mfc align-items-center" data-anchor-id="1">
                            <div className="order-md-2 ">
                                <Percent num="3" percent="70" skillimg="./img/main/about/html_css.png" cls="water_box water_box_4" cls_2="skillbox skillbox_4  align-items-center d-flex flex-column " cls_3="img-fluid " aosdelay="500" />
                            </div>
                            <div className="d-none d-md-flex order-md-1 ">
                                <Percent num="2" percent="85" skillimg="./img/main/about/jquery.png" cls="water_box water_box_3" cls_2="skillbox skillbox_3  align-items-center d-flex flex-column " cls_3="img-fluid Mh_0" aosdelay="1500" />
                            </div>
                            <div className="d-none d-md-flex order-md-3 ">
                                <Percent num="4" percent="70" skillimg="./img/main/about/sass.png" cls="water_box water_box_5" cls_2="skillbox skillbox_5  align-items-center d-flex flex-column " cls_3="img-fluid Mh_0" aosdelay="1100" />
                            </div>
                            <div className="d-md-none d-flex">
                                <Percent num="7" percent="70" skillimg="./img/main/about/jquery.png" cls="water_box water_box_3" cls_2="skillbox skillbox_3  align-items-center d-flex flex-column " cls_3="img-fluid Mh_0" aosdelay="600" />
                                <Percent num="8" percent="70" skillimg="./img/main/about/sass.png" cls="water_box water_box_5" cls_2="skillbox skillbox_5  align-items-center d-flex flex-column " cls_3="img-fluid Mh_0" aosdelay="700" />
                            </div>
                        </div>
                        <div className="skillslist_3 d-flex align-items-center">
                            <Percent num="5" percent="50" skillimg="" cls="water_box water_box_6" cls_2="skillbox skillbox_6 col-6 align-items-center d-flex flex-column" cls_3="img-fluid Mh_0" aosdelay="1300" />
                            <Percent num="6" percent="50" skillimg="" cls="water_box water_box_7" cls_2="skillbox skillbox_7 col-6 align-items-center d-flex flex-column" cls_3="img-fluid Mh_0" aosdelay="1200" />
                        </div>
                    </div>
                </div>
            </section>
        </div>

    );
}






export default About;