import Common from "./common/Common";
import Question from "./Question";
import Form from "./Form";
import Footer from './Footer';

function Concact(props) {
    return (
        <div className="section_3  position-relative">
            <Common title="" />
            <div id="Concact" className="maincolor">
                <Question />
                <Form />
            </div>
            <Footer />
        </div>
    );
}

export default Concact;