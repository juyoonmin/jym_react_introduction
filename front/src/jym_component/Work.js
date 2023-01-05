import Common from "./common/Common";
import Worksswiper from "./WorkSwiper";
import Waves from "./common/Waves";

function Work(props) {
    return (
        <div className="section_2 position-relative">
            <Common title="WORK" />
            <section id="Work" className="maincolor">
                <div className="container ps-md-0">
                    <h3 className="common_text">Portfolio</h3>
                </div>
            <Worksswiper />
            </section>
            <Waves />
        </div>
    );
}

export default Work;