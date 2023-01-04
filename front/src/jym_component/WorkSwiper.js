import swiperDBlink from '../jym_json/swiper.json';
import { Swiper, SwiperSlide } from 'swiper/react';


const Worksswiper = () => {
    const workinfo = swiperDBlink.swiperDB;
    return(
        <Swiper>
            {
                workinfo.map((item, index) => {
                    return(
                        <SwiperSlide></SwiperSlide>
                    )
                })
            }
        </Swiper>
    )
}

export default Worksswiper;
