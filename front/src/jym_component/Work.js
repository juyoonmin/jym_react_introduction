import Common from "./common/Common";
import Worksswiper from "./WorkSwiper";

function Work(props) {
    return (
        <div className="section_2 position-relative">
            <Common title="WORK" />
            <section id="Work" className="maincolor">
            <Worksswiper />
            </section>
        </div>
    );
}

export default Work;