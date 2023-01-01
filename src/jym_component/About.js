import Common from "./common/Common";
import Percent from "./common/Percent";
import Waves from "./common/Waves";





function About(props) {

    return (
        <div className="section_1  position-relative">
            <Common title="WHO?" />
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
                    <div className="d-flex flex-column align-items-center">
                        <div className="skillslist_1 d-flex align-items-center">
                            <Percent num="0" percent="50" skillimg="" cls="water_box water_box_1" cls_2="skillbox col-6 align-items-center d-flex flex-column" aosdelay="500" />
                            <Percent num="1" percent="50" skillimg="" cls="water_box water_box_2" cls_2="skillbox col-6 align-items-center d-flex flex-column" aosdelay="700" />
                        </div>
                        <div className="skillslist_2 d-flex align-items-center">
                            <Percent num="2" percent="70" skillimg="./img/main/about/jquery.png" cls="water_box water_box_3" cls_2="skillbox col-4 align-items-center d-flex flex-column" aosdelay="900" />
                            <Percent num="3" percent="90" skillimg="./img/main/about/html_css.png" cls="water_box water_box_4" cls_2="skillbox col-4 align-items-center d-flex flex-column" aosdelay="1100" />
                            <Percent num="4" percent="70" skillimg="./img/main/about/sass.png" cls="water_box water_box_5" cls_2="skillbox col-4 align-items-center d-flex flex-column" aosdelay="1300" />
                        </div>
                        <div className="skillslist_3 d-flex align-items-center">
                            <Percent num="5" percent="50" skillimg="" cls="water_box water_box_6" cls_2="skillbox col-6 align-items-center d-flex flex-column" aosdelay="1400" />
                            <Percent num="6" percent="50" skillimg="" cls="water_box water_box_7" cls_2="skillbox col-6 align-items-center d-flex flex-column" aosdelay="1500" />
                        </div>
                    </div>
                </div>
                <Waves />
            </section>
            <div className="position-relative">
                <Common title="WORK" />
            </div>
        </div>

    );
}






export default About;