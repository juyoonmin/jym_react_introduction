function Sns(){
    const snsDB = [{
        snstitle : 'github',
        snslink :'https://github.com/juyoonmin',
        snscls: 'fa-brands fa-github fa-2x'
    },
    {
        snstitle : 'insta',
        snslink :'https://github.com/juyoonmin',
        snscls: 'fa-brands fa-instagram fa-2x'
    },
    {
        snstitle : 'facebook',
        snslink :'https://github.com/juyoonmin',
        snscls: 'fa-brands fa-facebook fa-2x'
    }
    ]
    return(
        <div id="sns" >
            <ul class="d-flex">
                {
                snsDB.map(function(item, index){
                    return(
                    <li className="{item.snstitle} px-2"><a href={item.snslink} className="text-white"><i className={item.snscls}></i></a></li>
                    )
                })
                }
            </ul>
        </div>
        
    )
   
}


export default Sns ;