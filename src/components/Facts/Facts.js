import React from 'react';
import SlideFacts from './SlideFacts';
import SwiperCore, { Navigation, Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import './Facts.scss';

SwiperCore.use([Navigation, Pagination]);


const Facts = ({ title, slides }) => {
    const factsSlides = slides.map((slide) => <SwiperSlide>
        <SlideFacts item={slide} key={slide.id} />
    </SwiperSlide>);
    return (
        <section className='facts'>
            <div className="container">
                <h2 className="facts__title">{title}</h2>
                <div className="swiper-button-prev"></div>
                <Swiper
                    navigation={{
                        nextEl: '.swiper-button-next',
                        prevEl: '.swiper-button-prev',
                    }}
                    pagination={{
                        el: '.facts-pagination',
                        clickable: true,
                        renderBullet: function (index, className) {
                            return `<span class="facts-pagination-bullet ${className}"></span>`;
                        },
                    }}
                    slidesPerView={3}
                    spaceBetween={40}
                    slidesPerGroup={3}
                    loop={true}
                    loopFillGroupWithBlank={true}>
                    {factsSlides}
                </Swiper>
                <div className="swiper-button-next"></div>
                <div className="facts-pagination"></div>
            </div>
        </section >
    );
};

export default Facts;