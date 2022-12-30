import Common from "./common/Common";
import Percent from "./common/Percent";





function About(props) {

    return (
        <div>
            <Common />
            <section id="About" className="maincolor">
                <div id="profile" className="container ">
                    <div className="pb-4">
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
                <div className="Skills container">
                    <div className="">
                        <h3 className="common_text">Skills</h3>
                    </div>
                    <div className="d-flex justify-content-center">
                        <Percent num="0" percent="80" skillimg="./img/main/about/ph.png" cls="water_box water_box_1" aosdelay="700"/>
                        <Percent num="1" percent="50" skillimg="./img/main/about/pr.png" cls="water_box water_box_2" aosdelay="900"/>
                        <Percent num="2" percent="30" skillimg="./img/main/about/ai.png" cls="water_box water_box_3" aosdelay="1100"/>
                        <Percent num="3" percent="60" skillimg="./img/main/about/ph.png" cls="water_box water_box_4" aosdelay="1300"/>
                        <Percent num="4" percent="70" skillimg="./img/main/about/ph.png" cls="water_box water_box_5" aosdelay="1400"/>
                        <Percent num="5" percent="100" skillimg="./img/main/about/ph.png" cls="water_box water_box_6" aosdelay="1500"/>
                        <Percent num="6" percent="40" skillimg="./img/main/about/ph.png" cls="water_box water_box_7" aosdelay="1600"/>

                    </div>
                </div>
            </section>
        </div>

    );
}






export default About;