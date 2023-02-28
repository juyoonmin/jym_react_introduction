

function Bubbles(props) {
    return (
        <div className={props.cls2}>
            <div className={props.cls}>
                <div className={props.dnone}>
                    <img src="./img/main/common/bubbles.png" className="bubble b2" />
                    <img src="./img/main/common/bubbles.png" className="bubble b5" />
                    <img src="./img/main/common/bubbles.png" className="bubble" />
                </div>
                <img src="./img/main/common/bubbles.png" className="bubble b6" />
                <img src="./img/main/common/bubbles.png" className="bubble b3" />
                <img src="./img/main/common/bubbles.png" className="bubble b7" />
                <div className={props.dnone}>
                    <img src="./img/main/common/bubbles.png" className="bubble b4" />
                    <img src="./img/main/common/bubbles.png" className="bubble b8" />
                </div>
            </div>
        </div>

    );
}

export default Bubbles;