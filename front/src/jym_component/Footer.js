import Sns from './common/Sns';


function Footer(props) {
    return (
        <div id="Footer" className="d-flex align-items-center justify-content-evenly Mfc">
            <Sns/>
            <p className="order-md-1 py-3 py-md-4 footer_text">(C) 2022 JU YUN MIN All rights reserved.</p>
        </div>
    );
}

export default Footer;