import React from 'react';
import SlideFacts from './SlideFacts';
import SwiperCore, { Navigation, Pagination, EffectCoverflow } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/components/effect-coverflow/effect-coverflow.scss';
import 'swiper/swiper.scss';
import 'swiper/components/navigation/navigation.scss';
import 'swiper/components/pagination/pagination.scss';
import './Facts.scss';

SwiperCore.use([Navigation, Pagination, EffectCoverflow]);


const Facts = ({ title, slides }) => {
    const factsSlides = slides.map((slide, i) => <SwiperSlide key={i}>
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
                    breakpoints={{
                        1280: {
                            slidesPerView: 3,
                            slidesPerGroup: 3,
                        },
                        768: {
                            slidesPerView: 2,
                            slidesPerGroup: 2,
                        },
                        320: {
                            slidesPerView: 2,
                            slidesPerGroup: 1,
                            centeredSlides: true,
                            spaceBetween: 0,
                            effect: 'coverflow',
                            coverflowEffect: {
                                rotate: 0,
                                slideShadows: false,
                            }
                        }
                    }}
                >
                    {factsSlides}
                </Swiper>
                <div className="swiper-button-next"></div>
                <div className="facts-pagination"></div>
            </div>
        </section >
    );
};

export default Facts;