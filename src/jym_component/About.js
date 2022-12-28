import Common from "./common/Common";
import SVG, { Props as SVGProps } from 'react-inlinesvg';


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
                        <div className="profile_box_img p-4 order-md-2">
                            <img className="" src="/img/main/about/about_main_img.png" alt="" />
                        </div>
                        <div className="col-12 col-md-6 order-md-1 p-4">
                            <div className="profile_name ">
                                <h3 className="">주윤민</h3>
                            </div>
                            <p>이력 / 자격증</p>
                            <p>웹기능사</p>
                        </div>
                    </div>
                </div>
                <div className="Skills container">
                    <div className="">
                        <h3 className="common_text">Skills</h3>
                    </div>
                </div>
                <div>
                    {/* <SVG src={skills} /> */}
                </div>
            </section>
        </div>

    );
}




export default About;