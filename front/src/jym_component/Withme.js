import Common from "./common/Common";
import Question from "./Question";
import Form from "./Form";

function Withme(props) {
    return (
        <div className="section_3  position-relative">
            <Common title="" />
            <div id="Withme" className="maincolor">
                <Question />
                <Form />
            </div>
        </div>
    );
}

export default Withme;