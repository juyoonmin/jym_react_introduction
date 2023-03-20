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

    return (
        <Swiper className='WorkSection container pt-4 '
            modules={[Pagination,]}
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            initialSlide={1}
            pagination={{
                clickable: true,
            }}>
                
            {
                worklist && worklist.map((item, i) => {
                    const swipericon = `swipericon${i}`;
                    return (
                        <SwiperSlide key={"work " + i}>
                            <div className="workslide d-flex Mfc">
                                <div className='workimg col-12 col-md-6 d-flex flex-column'>
                                    <div className='workmainimg'>
                                        <a href={item.browsersrc} target="_blank" ><img className='rounded-4 img-fluid' src={item.mainimg} alt="메인포트폴리오이미지" /></a>
                                    </div>
                                </div>
                                <div className='workinfo col-12 col-md-6 d-flex flex-column text-white ps-md-5'>
                                    <div className='workinfobox_1'>
                                        <p className='maintitle'>{item.title}</p>
                                        {/* <p className='subtitle infotext'>{item.subtitle}</p> */}
                                        <p className='explanation main_explanation infotext py-4'>{item.explanation}</p>
                                    </div>
                                    <div className='workinfobox_2 pt-md-5 pb-3'>
                                        <div className='productionperiod d-flex'>
                                            <p className='explanation infotext productionperiod_text'>기간</p>
                                            <p className='infotext'>{item.productionperiod}</p>
                                        </div>
                                        <div className='useskills d-flex align-items-center'>
                                            <p className='explanation infotext useskills_text'>사용기술</p>
                                            <ProgressBar >
                                                <ProgressBar variant="html" aria-label="html" now={item.useskills_0} key={1} label={item.skillname_0} />
                                                <ProgressBar variant="css" aria-label="css" now={item.useskills_1} key={2} label={item.skillname_1} />
                                                <ProgressBar variant="javascript" aria-label="javascript" now={item.useskills_2} key={3} label={item.skillname_2} />
                                                <ProgressBar variant="php" aria-label="php" now={item.useskills_3} key={4} label={item.skillname_3} />
                                            </ProgressBar>
                                        </div>
                                        <div className='participation d-flex align-items-center'>
                                            <p className='explanation infotext participation_text'>참여도</p>
                                            <ProgressBar  >
                                                <ProgressBar variant="html" aria-label="plan" now={item.participation_percent_0} key={1} label={"Plan"} />
                                                <ProgressBar variant="css" aria-label="Design" now={item.participation_percent_1} key={2} label={"Design"} />
                                                <ProgressBar variant="javascript" aria-label="Implement" now={item.participation_percent_2} key={3} label={"Implement"} />
                                            </ProgressBar>
                                        </div>
                                    </div>
                                    <div className={`workinfobox_3 d-flex ${swipericon}`}>
                                        <a className='browser_icon' href={item.browsersrc} target="_blank"><img className='browser_img_m' src={item.browserimg} alt="브라우저아이콘" /></a>
                                        <a className='git_icon ps-4'href={item.gitsrc} target="_blank"><img className='git_img_m' src={item.gitimg} alt="깃아이콘" /></a>
                                        <a className='notion_icon ps-4' href={item.notionsrc} target="_blank"><img className='notion_img_m' src={item.notionimg} alt="노션아이콘" /></a>
                                        <a className='figma_icon ps-4' href={item.figmasrc} target="_blank"><img className='figma_img_m' src={item.figmaimg} alt="피그마아이콘" /></a>
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
