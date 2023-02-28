import swiperDBlink from '../jym_json/swiper.json';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, } from 'swiper';
import "swiper/css";
import "swiper/css/pagination";
import ProgressBar from 'react-bootstrap/ProgressBar';
import React, { useState, useEffect } from 'react';
import axios from 'axios';



const Worksswiper = () => {
    const [worklist, setworklist] = useState(null); // 비동기통신 useState의 null인 이유
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

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

    const fetchWork = async () => {
        try {
            // 요청이 시작 할 때에는 error 와 users 를 초기화하고
            // setError(null);
            setworklist(null);
            // loading 상태를 true 로 바꿉니다.
            setLoading(true);
            const response = await axios.get(
                '//goaxhfl0109.cafe24app.com/work?worktype=worklist'
                // goaxhfl0109.cafe24app.com/work?worktype=worklist&selectid=workList
            );
            setworklist(response.data);


        } catch (e) {
            setError(e);
        }
        setLoading(false); //응답받고 랜더링

    }


    useEffect(() => {
        fetchWork(); //마우팅끝나고 바로 한번만 요청실행
    }, []);



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
            }}>
                
            {
                worklist && worklist.map((item, i) => {
                    return (
                        <SwiperSlide key={"work " + i}>
                            <div className="workslide d-flex Mfc">
                                <div className='workimg col-12 col-md-6 d-flex flex-column'>
                                    <div className='mainimg'>
                                        <a href="#Intro"><img className='rounded-4 img-fluid' src={item.mainimg} alt="" /></a>
                                    </div>
                                    {/* <div className='subimg d-none d-md-flex pt-5'>
                                        <img className='rounded-4 img-fluid' src={item.subimg_0} alt="" />
                                        <img className='rounded-4 mx-3 img-fluid' src={item.subimg_1} alt="" />
                                        <img className='rounded-4 img-fluid' src={item.subimg_2} alt="" />
                                        <img className='rounded-4 mx-3 img-fluid' src={item.subimg[3]} alt="" />
                                    </div> */}
                                </div>
                                <div className='workinfo col-12 col-md-6 d-flex flex-column text-white ps-md-5'>
                                    <div className='workinfobox_1'>
                                        <p className='maintitle'>{item.title}</p>
                                        {/* <p className='subtitle infotext'>{item.subtitle}</p> */}
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
                                                <ProgressBar variant="html" now={item.useskills_0} key={1} label={item.skillname_0} />
                                                <ProgressBar variant="css" now={item.useskills_1} key={2} label={item.skillname_1} />
                                                <ProgressBar variant="javascript" now={item.useskills_2} key={3} label={item.skillname_2} />
                                            </ProgressBar>
                                        </div>
                                        <div className='participation d-flex align-items-center'>
                                            <p className='explanation infotext participation_text'>참여도</p>
                                            <ProgressBar  >
                                                <ProgressBar variant="html" now={item.participation_percent_0} key={1} label={"Plan"} />
                                                <ProgressBar variant="css" now={item.participation_percent_1} key={2} label={"Design"} />
                                                <ProgressBar variant="javascript" now={item.participation_percent_2} key={3} label={"Implement"} />
                                            </ProgressBar>
                                        </div>
                                    </div>
                                    <div className='workinfobox_3 d-flex'>
                                        <a href={item.gitsrc} target="_blank"><img className='git_img_m' src={item.gitimg} alt="" /></a>
                                        <a className='px-4' href={item.notionsrc} target="_blank"><img className='notion_img_m' src={item.notionimg} alt="" /></a>
                                        <a href={item.figmasrc} target="_blank"><img className='figma_img_m' src={item.figmaimg} alt="" /></a>
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
