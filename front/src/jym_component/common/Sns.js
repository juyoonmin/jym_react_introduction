function Sns() {
    const snsDB = [{
        snstitle: 'github',
        snslink: 'https://github.com/juyoonmin',
        snsimg: './img/main/common/git.png'
    },
    {
        snstitle: 'notion',
        snslink: 'https://github.com/juyoonmin',
        snsimg: './img/main/common/notion.png'
    },
        // {
        //     snstitle : 'facebook',
        //     snslink :'https://github.com/juyoonmin',
        //     snscls: 'fa-brands fa-facebook fa-2x'
        // }
    ]
    return (
        <div id="sns" className="order-md-2 pt-3 p-md-0" >
            <ul className="d-flex align-items-center">
                {
                    snsDB.map(function (item, index) {
                        return (
                            <li key={"sns" + index} className="{item.snstitle} pe-4">
                                <a href={item.snslink} target="_blank">
                                    <img className="sns_img" src={item.snsimg} alt="" />
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