import snsDBlink from '../../jym_json/sns.json'

function Sns() {
   const snsDb = snsDBlink.snsDB
    return (
        <div id="sns" className="order-md-2 pt-3 p-md-0" >
            <ul className="d-flex align-items-center">
                {
                    snsDb.map(function (item, index) {
                        return (
                            <li key={"sns" + index} className="pe-3">
                                <a href={item.snslink} target="_blank">
                                    <img className="sns_img" src={item.snsimg} alt="sns아이콘" />
                                </a>
                            </li>
                        )
                    })
                }
            </ul>
        </div>

    )

}


export default Sns;