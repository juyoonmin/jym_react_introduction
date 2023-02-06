import Common from "./common/Common";
import Worksswiper from "./WorkSwiper";

function Work(props) {
    return (
        <div className="section_2 position-relative" data-anchor-id="3">
            <Common title="WORK" anchor="[data-anchor-id='3']" />
            <section id="Work" className="maincolor" >
                
            <Worksswiper />
            </section>
        </div>
    );
}

export default Work;