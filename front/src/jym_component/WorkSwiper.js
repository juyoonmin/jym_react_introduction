import swiperDBlink from '../jym_json/swiper.json';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, } from 'swiper';
import "swiper/css";
import "swiper/css/pagination";
import ProgressBar from 'react-bootstrap/ProgressBar';
import { useEffect } from 'react';



const Worksswiper = () => {
    const workinfo = swiperDBlink.swiperDB;
    // const bullet = document.querySelectorAll(".swiper-pagination-bullet");
    // const proggres = document.querySelectorAll(".progress")
    // const bar = {width:"73%"};
    // useEffect(()=>{
    //     bullet.addEventListener('click',function(){
    //     proggres.animate({
    //         bar
    //     }, 2500);
    // });
    // },[])
   
    

    // var bullet =['1번','2번','3번','4번']
    return (
        <Swiper className='WorkSection container pt-4 '
            modules={[Pagination,]}
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{
                clickable: true,
                // renderBullet: function (index, className) {
                //     return `<div class="${className} "><span>${bullet[index]}</span></div>`;
                //     // <span>' + (bullet[index]) + '</span>
                //     // ${workinfo.subimg[index]}
                // }
            }}
        >
            {
                workinfo.map((item, i) => {
                    
                    return (
                        <SwiperSlide key={"workkey" + i}>
                            <div className="workslide d-flex Mfc">
                                <div className='workimg col-12 col-md-6 d-flex flex-column'>
                                    <div className='mainimg'>
                                        <a href="#Intro"><img className='rounded-4 img-fluid' src={item.mainimg} alt="" /></a>
                                    </div>
                                    {/* <div className='subimg d-none d-md-flex pt-5'>
                                        <img className='rounded-4 img-fluid' src={item.subimg[0]} alt="" />
                                        <img className='rounded-4 mx-3 img-fluid' src={item.subimg[1]} alt="" />
                                        <img className='rounded-4 img-fluid' src={item.subimg[2]} alt="" />
                                        <img className='rounded-4 mx-3 img-fluid' src={item.subimg[3]} alt="" />
                                    </div> */}
                                </div>
                                <div className='workinfo col-12 col-md-6 d-flex flex-column text-white ps-md-5'>
                                    <div className='workinfobox_1'>
                                        <p className='maintitle'>{item.title}</p>
                                        <p className='subtitle infotext'>{item.subtitle}</p>
                                        <p className='explanation main_explanation infotext py-4'>{item.explanation}</p>
                                    </div>
                                    <div className='workinfobox_2 pt-5 pb-3'>
                                        <div className='productionperiod d-flex'>
                                            <p className='explanation infotext productionperiod_text'>기간</p>
                                            <p className='infotext'>{item.productionperiod}</p>
                                        </div>
                                        <div className='useskills d-flex align-items-center'>
                                            <p className='explanation infotext useskills_text'>사용기술</p>
                                            <ProgressBar >
                                                <ProgressBar variant="html" now={item.useskills[0]} key={1} label={item.skillname[0]}/>
                                                <ProgressBar variant="css" now={item.useskills[1]} key={2} label={item.skillname[1]} />
                                                <ProgressBar variant="javascript" now={item.useskills[2]} key={3} label={item.skillname[2]} />
                                            </ProgressBar>
                                        </div>
                                        <div className='participation d-flex align-items-center'>
                                            <p className='explanation infotext participation_text'>참여도</p>
                                            <ProgressBar  >
                                                <ProgressBar variant="html" now={item.participation_percent[0]} key={1} label={item.participation[0]}/>
                                                <ProgressBar variant="css" now={item.participation_percent[1]} key={2} label={item.participation[1]} />
                                                <ProgressBar variant="javascript" now={item.participation_percent[2]} key={3} label={item.participation[2]} />
                                            </ProgressBar>
                                        </div>
                                    </div>
                                    <div className='workinfobox_3 d-flex'>
                                        <a href={item.gitsrc} target="_blank"><img src={item.gitimg} alt="" /></a>
                                        <a className='px-4' href={item.notionsrc} target="_blank"><img src={item.notionimg} alt="" /></a>
                                        <a href={item.figmasrc} target="_blank"><img src={item.figmaimg} alt="" /></a>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    )
                })
            }
        </Swiper>
    )
}

export default Worksswiper;
