import swiperDBlink from '../jym_json/swiper.json';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, } from 'swiper';
import "swiper/css";
import "swiper/css/pagination";



const Worksswiper = () => {
    const workinfo = swiperDBlink.swiperDB;
    return (
        <Swiper className='WorkSection container py-5 '
            modules={[Pagination,]}
            slidesPerView={1}
            spaceBetween={30}
            loop={true}
            pagination={{ clickable: true }}
        >
            {
                workinfo.map((item, i) => {
                    return (
                        <SwiperSlide key={"workkey" + i}>
                            <div className="workslide d-flex Mfc">
                                <div className='workimg col-12 col-md-6 d-flex flex-column'>
                                    <div className='mainimg'>
                                        <img className='rounded-4 img-fluid' src={item.mainimg} alt="" />
                                    </div>
                                    <div className='subimg d-none d-md-flex pt-5'>
                                        <img className='rounded-4 img-fluid' src={item.subimg[0]} alt="" />
                                        <img className='rounded-4 mx-3 img-fluid' src={item.subimg[1]} alt="" />
                                        <img className='rounded-4 img-fluid' src={item.subimg[2]} alt="" />
                                    </div>
                                </div>
                                <div className='workinfo col-12 col-md-6 d-flex flex-column text-white ps-md-5'>
                                    <div className='workinfobox_1'>
                                        <p className='maintitle'>{item.title}</p>
                                        <p className='subtitle infotext'>{item.subtitle}</p>
                                        <p className='explanation infotext py-4'>{item.explanation}</p>
                                    </div>
                                    <div className='workinfobox_2 py-5'>
                                        <div className='productionperiod d-flex'>
                                            <p className='explanation infotext productionperiod_text'>기간</p>
                                            <p className='infotext'>{item.productionperiod}</p>
                                        </div>
                                        <div className='useskills d-flex'>
                                            <p className='explanation infotext useskills_text'>사용기술</p>
                                            <p className='infotext'>{item.useskills}</p>
                                        </div>
                                        <div className='participation d-flex'>
                                            <p className='explanation infotext participation_text'>참여도</p>
                                            <p className='infotext'>{item.participation}</p>
                                        </div>
                                    </div>
                                    <div className='workinfobox_3 d-flex'>
                                        <a href={item.gitsrc} target="_blank"><img src={item.gitimg} alt="" /></a>
                                        <a href={item.notionsrc}><i></i></a>
                                        <a href={item.figmasrc}><i></i></a>
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
