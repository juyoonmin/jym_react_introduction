import Common from "./common/Common";

function About(props) {
    return (
        <div>
            <Common />
            <div id="About" className="maincolor">
                <div className="profill container col-12">
                    <div>
                        <h3 className="common_text">profill</h3>
                    </div>
                    <div className="profill_box bg-white rounded-4 d-flex">
                        <div className="col-6">
                            <h3>주윤민</h3>
                            <p>이력 / 자격증</p>
                            <p>웹기능사</p>
                        </div>
                        <div className="profill_box_img col-6">
                            <img src="" alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;