function Sns(){
    const snsDB = [{
        snstitle : 'github',
        snslink :'https://github.com/juyoonmin',
        snsimg: './img/main/common/git.png'
    },
    // {
    //     snstitle : 'notion',
    //     snslink :'https://github.com/juyoonmin',
    //     snsimg: './img/main/common/notion.png'
    // },
    // {
    //     snstitle : 'facebook',
    //     snslink :'https://github.com/juyoonmin',
    //     snscls: 'fa-brands fa-facebook fa-2x'
    // }
    ]
    return(
        <div id="sns" >
            <ul class="d-flex align-items-center">
                {
                snsDB.map(function(item, index){
                    return(
                    <li className="{item.snstitle} px-2"><a href={item.snslink}><img src={item.snsimg} alt="" /></a></li>
                    )
                })
                }
            </ul>
        </div>
        
    )
   
}


export default Sns ;