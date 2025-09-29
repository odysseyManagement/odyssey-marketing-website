import { Autoplay, Keyboard, Navigation, Pagination } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import TestimonialV3Data from "../../../src/assets/jsonData/testimonial/TestimonialV3Data.json";
import SingleTestimonialV3 from "./SingleTestimonialV3";
import shape14 from "/assets/img/shape/14.png";

interface DataType {
    sectionClass?: string
}

const TestimonialV3 = ({ sectionClass }: DataType) => {
    return (
        <>
            <div className={`testimonial-style-three-area default-padding ${sectionClass ? sectionClass : ""}`}>
                <div className="shape-style-one">
                    <img className="upDownScrol" src={shape14} alt="Image Not Found" />
                </div>
                    <div className="container mt-30 ">     </div>
                <div className="container">
                    <div className="testimonial-heading">
                        <div className="row">
                            <div className="col-lg-12">
                                <h2 className="text-large-gradient pb-4 pb-30">
                                     Talent Showcase
                                </h2>
                                <br></br>
                            </div>

                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-lg-12">
                            <Swiper className="testimonial-style-three-carousel swiper"
                                loop={true}
                                slidesPerView={3}
                                spaceBetween={30}
 autoplay={{
                                delay: 3000, // 3s
                                disableOnInteraction: false, // keeps autoplay after manual navigation
                                }}
                                pagination={{
                                    el: '.swiper-pagination',
                                    clickable: true,
                                }}
                                navigation={{
                                    nextEl: ".swiper-button-next",
                                    prevEl: ".swiper-button-prev",
                                }}
                                breakpoints={{
                                    768: {
                                        slidesPerView: 4,
                                        spaceBetween: 30
                                    },
                                }}
                                modules={[Pagination, Navigation, Keyboard, Autoplay]}
                            >
                                <div className="swiper-wrapper">
                                    {TestimonialV3Data.map(testimonial =>
                                        <SwiperSlide key={testimonial.id}>
                                            <SingleTestimonialV3 testimonial={testimonial} />
                                        </SwiperSlide>
                                    )}
                                </div>

                                {/* Navigation */}
                                <div className="testimonial-control">
                                    <div className="swiper-pagination" />
                                    <div className="swiper-nav-left">
                                        <div className="swiper-button-prev" />
                                        <div className="swiper-button-next" />
                                    </div>
                                </div>
                            </Swiper>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TestimonialV3;