import Common from "./reusable/Common";
import Worksswiper from "./WorkSwiper";
import Bubbles from "./reusable/Bubbles";

function Work(props) {
    return (
        <div className="section_2 position-relative" data-anchor-id="3">
            <Common title="WORK" anchor="[data-anchor-id='3']" cls="bubbles bubbles0" cls2="bubbles bubbles0_0" />
            <section id="Work" className="maincolor" >
                <Bubbles cls="bubbles bubbles5" />
                <Bubbles cls="bubbles bubbles6" />
                <Bubbles cls="bubbles bubbles7" />
                <Bubbles cls="bubbles bubbles8" />
                <Worksswiper />
            </section>
        </div>
    );
}

export default Work;